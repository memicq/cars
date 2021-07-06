package com.tetete.carapi.models.tables;

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
@Table(name = "tags_articles")
public class TagArticle {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "tags_articles_id", nullable = false)
    private Long tagsArticlesId;

    @Column(name = "tag_id", nullable = false)
    private Long tagId;

    @Column(name = "article_id", nullable = false)
    private Long articleId;

    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;

    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
}
