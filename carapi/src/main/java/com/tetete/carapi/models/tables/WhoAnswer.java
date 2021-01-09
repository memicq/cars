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
    @Id @GeneratedValue @Column(name = "who_answer_id", nullable = false)
    private Long whoAnswerId;

    @Column(name = "name", nullable = true, length = 255)
    private String name;

    @Column(name = "vote_count", nullable = false)
    private Long voteCount = 0L;

    @Column(name = "who_request_id", nullable = false)
    private Long whoRequestId;

    @Column(name = "created_at", nullable = false)
    private LocalTime createdAt;

    @Column(name = "created_by", nullable = false)
    private Long createdBy;

    @Column(name = "updated_at", nullable = false)
    private LocalTime updatedAt;
}
