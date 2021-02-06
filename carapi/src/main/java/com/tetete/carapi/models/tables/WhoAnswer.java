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
@Table(name = "who_answers")
public class WhoAnswer {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "who_answer_id", nullable = false)
    private Long whoAnswerId;

    @Column(name = "name", nullable = true, length = 255)
    private String name;

    @Column(name = "vote_count", nullable = false)
    private Long voteCount = 0L;

    @Column(name = "who_request_id", nullable = false)
    private Long whoRequestId;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "created_by", nullable = false)
    private Long createdBy;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;
}
