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
@Table(name = "tags_search_conditions")
public class TagSearchCondition {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "tag_search_conditions_id", nullable = false)
    private Long tagsSearchConditionsId;

    @Column(name = "tag_id", nullable = false)
    private Long tagId;

    @Column(name = "search_condition_id", nullable = false)
    private Long searchConditionId;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;
}
