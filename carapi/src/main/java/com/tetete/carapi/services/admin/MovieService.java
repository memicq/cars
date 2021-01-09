package com.tetete.carapi.services.admin;

import com.tetete.carapi.models.AdminMovieView;
import com.tetete.carapi.models.tables.Article;
import com.tetete.carapi.repositories.admin.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovieService {
    @Autowired ArticleRepository articleRepository;

    @Transactional
    public List<AdminMovieView> listAll() {
        List<Article> articles = articleRepository.findAll();
        List<AdminMovieView> movies =
            articles.stream()
            .map(article ->
                AdminMovieView.builder().title(article.getTitle()).description(article.getDescription()).build()
            ).collect(Collectors.toList());
        return movies;
    }
}
