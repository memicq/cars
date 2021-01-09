package com.tetete.carapi.repositories.admin;

import com.tetete.carapi.models.tables.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
}