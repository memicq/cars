package com.tetete.carapi.models.views.admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminMovieListView {
    private List<AdminMovieView> movieList;
    private Long totalCount;
    private Long totalPageCount;
}
