package com.tetete.carapi.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddMovieRequest {
    @NotNull private String title;
    @NotNull private String description;
    @NotNull private String sourceUrl;
}
