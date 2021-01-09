package com.tetete.carapi.controllers.admin;

import com.tetete.carapi.models.AddMovieRequest;
import com.tetete.carapi.models.AddTagRequest;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/admin")
@Validated
public class TagController {
    @PostMapping(value = "/tags", consumes = "application/json")
    public AddTagRequest addTag(@Valid @RequestBody AddTagRequest request) {
        return new AddTagRequest(request.getName(), request.getParentTagId());
    }
}
