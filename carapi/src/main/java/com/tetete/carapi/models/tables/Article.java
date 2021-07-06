package com.tetete.carapi.models.tables;

import com.tetete.carapi.models.enums.SourceMovieSite;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "articles")
public class Article {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "article_id", nullable = false)
    private Long articleId;

    @Column(name = "title", nullable = false, length = 511)
    private String title;

    @Column(name = "description", nullable = true, length = 1023)
    private String description;

    @Column(name = "source_url", nullable = false, length =  2047)
    private String sourceUrl;

    @Column(name = "embedded_url", nullable = false, length = 2047)
    private String embeddedUrl;

    @Column(name = "source_site", nullable = false, length = 31)
    @Enumerated(EnumType.STRING)
    private SourceMovieSite sourceSite;

    @Column(name = "is_published", nullable = false)
    private Boolean isPublished = false;

    @Column(name = "view_count", nullable = false)
    private Long viewCount = 0L;

    @Column(name = "is_archived", nullable = false)
    private Boolean isArchived = false;

    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;

    @Column(name = "created_by", nullable = false)
    private Long createdBy;

    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;

    @Column(name = "updated_by", nullable = false)
    private Long updatedBy;
}
