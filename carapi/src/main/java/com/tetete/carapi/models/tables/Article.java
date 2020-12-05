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
    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = true, length = 1023)
    private String description;

    @Column(nullable = false, length =  2047)
    private String sourceUrl;

    @Column(nullable = false, length = 31)
    @Enumerated(EnumType.STRING)
    private SourceMovieSite sourceSite;

    @Column(nullable = false)
    private long viewCount = 0;

    @Column(nullable = false)
    private boolean isArchived = false;

    @Column(nullable = false)
    @CreatedDate
    private LocalTime createdAt;

    @Column(nullable = false)
    @CreatedBy
    private long createdBy;

    @Column(nullable = false)
    @LastModifiedDate
    private LocalTime updatedAt;

    @OneToMany(mappedBy = "article")
    private List<CollectionArticle> collectionArticles;

    @OneToMany(mappedBy = "article")
    private List<TagArticle> tagArticles;

    @OneToMany(mappedBy = "article")
    private List<Comment> comments;
}
