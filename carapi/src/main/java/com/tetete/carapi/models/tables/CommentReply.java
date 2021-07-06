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
@Table(name = "comment_replies")
public class CommentReply {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "comment_reply_id", nullable = false)
    private Long commentReplyId;

    @Column(name = "replied_from_id", nullable = false)
    private Long repliedFromId;

    @Column(name = "replied_to_id", nullable = false)
    private Long repliedToId;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "created_by", nullable = false)
    private Long createdBy;
}
