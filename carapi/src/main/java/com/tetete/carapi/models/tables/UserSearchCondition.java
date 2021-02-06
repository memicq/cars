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
@Table(name = "users_search_conditions")
public class UserSearchCondition {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "user_search_conditions_id", nullable = false)
    private Long userSearchConditionsId;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "search_condition_id", nullable = false)
    private Long searchConditionId;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;
}
