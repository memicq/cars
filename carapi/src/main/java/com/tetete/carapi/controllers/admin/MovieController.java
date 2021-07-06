package com.tetete.carapi.controllers.admin;

import com.tetete.carapi.models.AddMovieRequest;
import com.tetete.carapi.models.views.admin.AdminMovieListView;
import com.tetete.carapi.services.admin.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/admin")
@Validated
public class MovieController {

    @Autowired MovieService movieService;

    @GetMapping(value = "/movies")
    public AdminMovieListView listMovies(
            @RequestParam(value = "page", required = false, defaultValue = "1") Integer page,
            @RequestParam(value = "limit", required = false, defaultValue = "20") Integer limit
    ) {
        return movieService.getAdminMovieList(page-1, limit);
    }

    @PostMapping(value = "/movies", consumes = "application/json")
    public void addMovie(@Valid @RequestBody AddMovieRequest request) {
        movieService.addMovie(request);
    }

    @DeleteMapping(value = "/movies/{movieId}")
    public void deleteMovie(@PathVariable("movieId") Long movieId) {
        movieService.deleteMovie(movieId);
    }
}
