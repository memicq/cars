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

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "who_answers")
public class WhoAnswer {
    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = true, length = 255)
    private String name;

    @Column(nullable = false)
    private long voteCount = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "who_request_id", referencedColumnName = "id")
    private WhoRequest whoRequest;

    @CreatedDate
    @Column(nullable = false)
    private LocalTime createdAt;

    @CreatedBy
    @Column(nullable = false)
    private long createdBy;

    @Column(nullable = false)
    @LastModifiedDate
    private Date updatedAt;
}
