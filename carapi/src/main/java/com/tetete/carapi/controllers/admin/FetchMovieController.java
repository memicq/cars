package com.tetete.carapi.controllers.admin;

import com.tetete.carapi.models.FetchMovieRequest;
import com.tetete.carapi.models.MovieAttributesResponse;
import com.tetete.carapi.services.admin.FetchMovieService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/admin/fetch")
public class FetchMovieController {

    @Autowired
    FetchMovieService fetchMovieService;

    @PostMapping(value = "/movies")
    public ResponseEntity<MovieAttributesResponse> fetchFromMovieSite(@RequestBody FetchMovieRequest request) {
        MovieAttributesResponse response = null;

        try {
            response = fetchMovieService.fetchMovie(request.getUrlString());
        } catch (IOException e) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
