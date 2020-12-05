package com.tetete.carapi.models.tables;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tag_relations")
public class TagRelation {
    @Id
    @GeneratedValue
    private long id;

    @CreatedDate
    @Column(nullable = false)
    private LocalTime createdAt;

    @LastModifiedDate
    @Column(nullable = false)
    private Date updatedAt;

    @OneToOne
    @JoinColumn(name = "parent_tag_id", referencedColumnName = "id")
    private Tag parentTag;

    @OneToOne
    @JoinColumn(name = "child_tag_id", referencedColumnName = "id")
    private Tag childTag;
}
