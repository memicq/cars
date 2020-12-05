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
    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = true, length = 1023)
    private String description;

    @CreatedDate
    @Column(nullable = false)
    private LocalTime createdAt;

    @LastModifiedDate
    @Column(nullable = false)
    private Date updatedAt;

    @OneToMany(mappedBy = "searchCondition")
    private List<TagSearchCondition> tagSearchConditions;

    @OneToMany(mappedBy = "searchCondition")
    private List<UserSearchCondition> userSearchConditions;
}
