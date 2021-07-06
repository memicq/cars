package com.tetete.carapi.repositories.admin;

import com.tetete.carapi.models.tables.Article;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends PagingAndSortingRepository<Article, Long> {}