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
    @Id @GeneratedValue @Column(name = "tag_relation_id", nullable = false)
    private Long tagRelationId;

    @Column(name = "parent_tag_id", nullable = false)
    private Long parentTagId;

    @Column(name = "child_tag_id", nullable = false)
    private Long childTagId;

    @Column(name = "created_at", nullable = false)
    private LocalTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalTime updatedAt;
}
