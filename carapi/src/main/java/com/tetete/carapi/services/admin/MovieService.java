package com.tetete.carapi.services.admin;

import com.tetete.carapi.models.AddMovieRequest;
import com.tetete.carapi.models.enums.SourceMovieSite;
import com.tetete.carapi.models.tables.Article;
import com.tetete.carapi.models.tables.TagArticle;
import com.tetete.carapi.models.views.admin.AdminMovieListView;
import com.tetete.carapi.models.views.admin.AdminMovieView;
import com.tetete.carapi.repositories.admin.ArticleRepository;
import com.tetete.carapi.repositories.admin.TagArticleRepository;
import com.tetete.carapi.repositories.admin.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MovieService {
    @Autowired ArticleRepository articleRepository;
    @Autowired TagArticleRepository tagArticleRepository;
    @Autowired TagRepository tagRepository;

    @Transactional
    public AdminMovieListView getAdminMovieList(Integer offset, Integer limit) {
        List<AdminMovieView> movieList = listAll(offset, limit);
        movieList.stream().map(movieView -> {
            List<Long> tagIds = tagArticleRepository.findAllByArticleId(movieView.getArticleId())
                    .stream()
                    .map(tagArticle -> tagArticle.getTagId())
                    .collect(Collectors.toList());
            List<String> tagNames = tagIds.stream()
                    .map(tagRepository::findById)
                    .flatMap(Optional::stream)
                    .map(tag -> tag.getName())
                    .collect(Collectors.toList());
            movieView.setTagNames(tagNames);
            return movieView;
        }).collect(Collectors.toList());

        Long totalCount = getTotalCount();

        return AdminMovieListView.builder()
                .totalCount(totalCount)
                .totalPageCount((totalCount / limit) + 1)
                .movieList(movieList)
                .build();
    }

    @Transactional
    public void addMovie(AddMovieRequest request) {
        Timestamp current = Timestamp.valueOf(LocalDateTime.now());
        Article article = Article.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .sourceUrl(request.getSourceUrl())
                .embeddedUrl(request.getEmbeddedUrl())
                .sourceSite(SourceMovieSite.PORNHUB)
                .isPublished(false)
                .viewCount(0L)
                .isArchived(false)
                .createdAt(current)
                .createdBy(1L)
                .updatedAt(current)
                .updatedBy(1L)
                .build();
        Article savedArticle = articleRepository.save(article);

        request.getTagIds().forEach(tagId -> {
            TagArticle tagArticle = TagArticle.builder()
                    .tagId(tagId)
                    .articleId(savedArticle.getArticleId())
                    .createdAt(current)
                    .updatedAt(current)
                    .build();
            tagArticleRepository.save(tagArticle);
        });
    }

    @Transactional
    public void deleteMovie(Long articleId) {
        tagArticleRepository.deleteAllByArticleId(articleId);
        articleRepository.deleteById(articleId);
    }

    private Long getTotalCount() {
        return articleRepository.count();
    }

    private List<AdminMovieView> listAll(Integer page, Integer limit) {
        Pageable pageRequest = PageRequest.of(page, limit, Sort.by("updatedAt").descending());
        List<Article> articles = articleRepository.findAll(pageRequest).toList();

        return articles.stream()
            .map(art ->
                AdminMovieView.builder()
                    .articleId(art.getArticleId())
                    .title(art.getTitle())
                    .description(art.getDescription())
                    .sourceUrl(art.getSourceUrl())
                    .embeddedUrl(art.getEmbeddedUrl())
                    .sourceSite(art.getSourceSite())
                    .isPublished(art.getIsPublished())
                    .isArchived(art.getIsArchived())
                    .viewCount(art.getViewCount())
                    .createdAt(art.getCreatedAt().toLocalDateTime())
                    .createdBy(art.getCreatedBy())
                    .updatedAt(art.getUpdatedAt().toLocalDateTime())
                    .updatedBy(art.getUpdatedBy())
                    .build()
            ).collect(Collectors.toList());
    }
}
