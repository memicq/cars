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
    @Id
    @GeneratedValue
    private long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false, length = 4)
    @Enumerated(EnumType.STRING)
    private TagNodeType nodeType;

    @Column(nullable = false)
    @CreatedDate
    private LocalTime createdAt;

    @Column(nullable = false)
    @LastModifiedDate
    private LocalTime updatedAt;

    @OneToMany(mappedBy = "tag")
    private List<TagArticle> tagArticles;

    @OneToMany(mappedBy = "tag")
    private List<TagSearchCondition> tagSearchConditions;

    @OneToOne(mappedBy = "parentTag")
    private TagRelation tagRelationAsParent;

    @OneToOne(mappedBy = "childTag")
    private TagRelation tagRelationAsChild;
}
