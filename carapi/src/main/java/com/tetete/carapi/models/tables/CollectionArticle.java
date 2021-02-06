package com.tetete.carapi.models.tables;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "collections_articles")
public class CollectionArticle {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "collection_articles_id", nullable = false)
    private Long collectionArticlesId;

    @Column(name = "collection_id", nullable = false)
    private Long collectionId;

    @Column(name = "article_id", nullable = false)
    private Long articleId;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;
}
