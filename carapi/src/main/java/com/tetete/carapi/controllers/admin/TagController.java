package com.tetete.carapi.controllers.admin;

import com.tetete.carapi.models.AddTagRequest;
import com.tetete.carapi.models.tables.Tag;
import com.tetete.carapi.models.views.admin.AdminTagView;
import com.tetete.carapi.services.admin.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@Validated
public class TagController {

    @Autowired TagService tagService;

    @GetMapping(value = "/tags")
    public ResponseEntity<List<AdminTagView>> list() {
        List<AdminTagView> list = tagService.list();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping(value = "/tags", consumes = "application/json")
    public ResponseEntity<Tag> addTag(@Valid @RequestBody AddTagRequest request) {
        Tag updatedTag = tagService.addTag(request.getName(), request.getParentTagId());
        return new ResponseEntity<>(updatedTag, HttpStatus.OK);
    }

    @DeleteMapping(value = "/tags/{tagId}")
    public ResponseEntity<String> removeTag(@PathVariable("tagId") Long tagId) {
        tagService.removeTag(tagId);
        return new ResponseEntity<>("deleted", HttpStatus.OK);
    }
}
