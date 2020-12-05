package com.tetete.carapi.models.tables;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "collections")
public class Collection {
    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = true, length = 1023)
    private String description;

    @Column(nullable = false)
    @CreatedDate
    private LocalTime createdAt;

    @Column(nullable = false)
    @LastModifiedDate
    private LocalTime updatedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "collection")
    private List<CollectionArticle> collectionArticles;
}
