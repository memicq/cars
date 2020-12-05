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
@Table(name = "tags_search_conditions")
public class TagSearchCondition {
    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false)
    @CreatedDate
    private LocalTime createdAt;

    @Column(nullable = false)
    @LastModifiedDate
    private LocalTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "tag_id", referencedColumnName = "id")
    private Tag tag;

    @ManyToOne
    @JoinColumn(name = "search_condition_id", referencedColumnName = "id")
    private SearchCondition searchCondition;
}
