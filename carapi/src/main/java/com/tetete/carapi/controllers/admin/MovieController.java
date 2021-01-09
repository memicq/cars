package com.tetete.carapi.controllers.admin;

import com.tetete.carapi.models.AddMovieRequest;
import com.tetete.carapi.models.AdminMovieView;
import com.tetete.carapi.services.admin.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@Validated
public class MovieController {

    @Autowired MovieService movieService;

    @GetMapping(value = "/movies")
    public List<AdminMovieView> listMovies() {
        return movieService.listAll();
    }

    @PostMapping(value = "/movies", consumes = "application/json")
    public AddMovieRequest addMovie(@Valid @RequestBody AddMovieRequest request) {
        return new AddMovieRequest(request.getTitle(), request.getDescription(), request.getSourceUrl());
    }
}
