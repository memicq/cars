package com.tetete.carapi.models.tables;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
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
@Table(name = "who_requests")
public class WhoRequest {
    @Id
    @GeneratedValue
    private long id;

    @OneToOne
    @JoinColumn(name = "article_id", referencedColumnName = "id")
    private Article article;

    @CreatedDate
    @Column(nullable = false)
    private LocalTime createdAt;

    @CreatedBy
    @Column(nullable = false)
    private long createdBy;

    @Column(nullable = false)
    @LastModifiedDate
    private Date updatedAt;

    @OneToMany(mappedBy = "whoRequest")
    private List<WhoAnswer> whoAnswers;
}
