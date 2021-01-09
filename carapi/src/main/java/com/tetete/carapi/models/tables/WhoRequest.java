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
    @Id @GeneratedValue @Column(name = "who_request_id", nullable = false)
    private Long whoRequestId;

    @Column(name = "article_id", nullable = false)
    private Long articleId;

    @Column(name = "created_at", nullable = false)
    private LocalTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalTime updatedAt;
}
