package com.tetete.carapi.controllers.admin;

import com.tetete.carapi.models.AddMovieRequest;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/admin")
@Validated
public class MovieController {
    @PostMapping(value = "/movies", consumes = "application/json")
    public AddMovieRequest addMovie(@Valid @RequestBody AddMovieRequest request) {
        return new AddMovieRequest(request.getTitle(), request.getDescription(), request.getSourceUrl());
    }
}
