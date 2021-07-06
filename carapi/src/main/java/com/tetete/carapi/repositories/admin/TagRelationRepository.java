package com.tetete.carapi.repositories.admin;

import com.tetete.carapi.models.tables.TagRelation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRelationRepository extends JpaRepository<TagRelation, Long> {
    List<TagRelation> findAllByParentTagId(Long parentTagId);

    void deleteByChildTagId(Long childTagId);
    void deleteAllByParentTagId(Long parentTagId);
}