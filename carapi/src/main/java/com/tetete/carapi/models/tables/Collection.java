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
    @Id @GeneratedValue @Column(name = "collection_id", nullable = false)
    private Long collectionId;

    @Column(name = "title", nullable = false, length = 255)
    private String title;

    @Column(name = "description", nullable = true, length = 2047)
    private String description;

    @Column(name = "created_at", nullable = false)
    private LocalTime createdAt;

    @Column(name = "created_by", nullable = false)
    private LocalTime createdBy;

    @Column(name = "updated_at", nullable = false)
    private LocalTime updatedAt;

    @Column(name = "updated_by", nullable = false)
    private LocalTime updatedBy;
}
