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
@Table(name = "comment_replies")
public class CommentReply {
    @Id @GeneratedValue @Column(name = "comment_reply_id", nullable = false)
    private Long commentReplyId;

    @Column(name = "replied_from_id", nullable = false)
    private Long repliedFromId;

    @Column(name = "replied_to_id", nullable = false)
    private Long repliedToId;

    @Column(name = "created_at", nullable = false)
    private LocalTime createdAt;

    @Column(name = "created_by", nullable = false)
    private LocalTime createdBy;
}
