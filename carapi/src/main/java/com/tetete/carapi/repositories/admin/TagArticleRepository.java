package com.tetete.carapi.repositories.admin;

import com.tetete.carapi.models.tables.TagArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagArticleRepository extends JpaRepository<TagArticle, Long> {
    List<TagArticle> findAllByArticleId(Long articleId);
    void deleteAllByArticleId(Long articleId);
}
