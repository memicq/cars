package com.tetete.carapi.models.tables;

import com.tetete.carapi.models.enums.SourceMovieSite;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "articles")
public class Article {
    @Id @GeneratedValue @Column(name = "article_id", nullable = false)
    private Long articleId;

    @Column(name = "title", nullable = false, length = 511)
    private String title;

    @Column(name = "description", nullable = true, length = 1023)
    private String description;

    @Column(name = "source_url", nullable = false, length =  2047)
    private String sourceUrl;

    @Column(name = "source_site", nullable = false, length = 31)
    @Enumerated(EnumType.STRING)
    private SourceMovieSite sourceSite;

    @Column(name = "is_published", nullable = false)
    private Boolean isPublished = false;

    @Column(name = "view_count", nullable = false)
    private Long viewCount = 0L;

    @Column(name = "is_archived", nullable = false)
    private boolean isArchived = false;

    @Column(name = "created_at", nullable = false)
    private LocalTime createdAt;

    @Column(name = "created_by", nullable = false)
    private Long createdBy;

    @Column(name = "updated_at", nullable = false)
    private LocalTime updatedAt;

    @Column(name = "updated_by", nullable = false)
    private LocalTime updatedBy;
}
