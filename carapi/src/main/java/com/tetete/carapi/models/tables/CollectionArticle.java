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
@Table(name = "collections_articles")
public class CollectionArticle {
    @Id
    @GeneratedValue
    private long id;

    @ManyToOne
    @JoinColumn(name = "collection_id", referencedColumnName = "id")
    private Collection collection;

    @ManyToOne
    @JoinColumn(name = "article_id", referencedColumnName = "id")
    private Article article;

    @CreatedDate
    private LocalTime createdAt;

    @LastModifiedDate
    private LocalTime updatedAt;
}
