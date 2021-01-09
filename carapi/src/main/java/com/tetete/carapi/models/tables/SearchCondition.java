package com.tetete.carapi.models.tables;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "search_conditions")
public class SearchCondition {
    @Id @GeneratedValue @Column(name = "search_condition_id", nullable = false)
    private Long searchConditionId;

    @Column(name = "description", nullable = true, length = 255)
    private String description;

    @Column(name = "created_at", nullable = false)
    private LocalTime createdAt;

    @Column(name = "created_by", nullable = false)
    private Long createdBy;

    @Column(name = "updated_at", nullable = false)
    private LocalTime updatedAt;

    @Column(name = "updated_by", nullable = false)
    private Long updatedBy;
}
