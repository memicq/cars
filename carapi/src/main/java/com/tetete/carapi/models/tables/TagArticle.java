package com.tetete.carapi.models.tables;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tags_articles")
public class TagArticle {
    @Id @GeneratedValue @Column(name = "tags_articles_id", nullable = false)
    private Long tagsArticlesId;

    @Column(name = "tag_id", nullable = false)
    private Long tagId;

    @Column(name = "article_id", nullable = false)
    private Long articleId;

    @Column(name = "created_at", nullable = false)
    private LocalTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalTime updatedAt;
}
