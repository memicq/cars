package com.tetete.carapi.repositories.admin;

import com.tetete.carapi.models.tables.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    List<Tag> findAllByHasParent(Boolean hasParent);
}
