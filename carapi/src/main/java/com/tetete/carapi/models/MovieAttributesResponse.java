package com.tetete.carapi.models;

import com.tetete.carapi.models.enums.SourceMovieSite;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MovieAttributesResponse {
    @NotNull private String title;
    @NotNull private String sourceUrl;
    @NotNull private String embeddedUrl;
    @NotNull private SourceMovieSite sourceMovieSite;
}
