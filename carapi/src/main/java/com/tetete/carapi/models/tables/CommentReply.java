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
    @Id
    @GeneratedValue
    private long id;

    @CreatedDate
    private LocalTime createdAt;

    @LastModifiedDate
    private LocalTime updatedAt;

    @OneToOne
    @JoinColumn(name = "replied_from_id", referencedColumnName = "id")
    private Comment fromComment;

    @OneToOne
    @JoinColumn(name = "replied_to_id", referencedColumnName = "id")
    private Comment toComment;
}
