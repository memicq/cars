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
@Table(name = "users_search_conditions")
public class UserSearchCondition {
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
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "search_condition_id", referencedColumnName = "id")
    private SearchCondition searchCondition;
}
