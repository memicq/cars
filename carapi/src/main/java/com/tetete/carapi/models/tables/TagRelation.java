package com.tetete.carapi.models.tables;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "tag_relations")
public class TagRelation {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "tag_relation_id", nullable = false)
    private Long tagRelationId;

    @Column(name = "parent_tag_id", nullable = false)
    private Long parentTagId;

    @Column(name = "child_tag_id", nullable = false)
    private Long childTagId;

    @Column(name = "created_at", nullable = false)
    private Timestamp createdAt;

    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;
}
