package com.tetete.carapi.models.tables;

import com.tetete.carapi.models.enums.TagNodeType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tags")
public class Tag {
    @Id @GeneratedValue @Column(name = "tag_id", nullable = false)
    private Long tagId;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "node_type", nullable = false, length = 4)
    @Enumerated(EnumType.STRING)
    private TagNodeType nodeType;

    @Column(name = "sort_no", nullable = false)
    private int sortNo;

    @Column(name = "created_at", nullable = false)
    private LocalTime createdAt;

    @Column(name = "created_by", nullable = false)
    private Long createdBy;

    @Column(name = "updated_at", nullable = false)
    private LocalTime updatedAt;

    @Column(name = "updated_by", nullable = false)
    private Long updatedBy;
}
