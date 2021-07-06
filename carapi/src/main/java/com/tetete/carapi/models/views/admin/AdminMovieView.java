package com.tetete.carapi.models.views.admin;

import com.tetete.carapi.models.enums.SourceMovieSite;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminMovieView {
    private Long articleId;
    private String title;
    private String description;
    private String sourceUrl;
    private String embeddedUrl;
    private SourceMovieSite sourceSite;
    private Boolean isPublished;
    private Boolean isArchived;
    private Long viewCount;
    private LocalDateTime createdAt;
    private Long createdBy;
    private LocalDateTime updatedAt;
    private Long updatedBy;

    private List<String> tagNames;
}
