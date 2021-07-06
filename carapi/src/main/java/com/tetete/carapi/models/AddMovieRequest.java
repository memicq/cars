package com.tetete.carapi.models;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddMovieRequest {
    @NotNull private String title;
    @NotNull private String description;
    @NotNull private String sourceUrl;
    @NonNull private String embeddedUrl;
    @NonNull private List<Long> tagIds;
}
