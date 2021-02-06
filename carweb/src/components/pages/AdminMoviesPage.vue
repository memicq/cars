<template>
  <admin-page-layout>
    <template slot="content">
      <v-toolbar elevation="0">
        <v-toolbar-title>動画一覧</v-toolbar-title>
        <v-spacer></v-spacer>
        <movie-addition-form @reset="resetMovieList" />
      </v-toolbar>

      <admin-movie-list
        :displayMovies="this.displayMovies"
        :totalCount="this.totalCount"
        @reset="resetMovieList"
      />

      <v-container>
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="this.totalPageCount"
            :total-visible="7"
          ></v-pagination>
        </div>
      </v-container>
    </template>
  </admin-page-layout>
</template>

<script>
import AdminMovieList from "../organisms/AdminMovieList.vue";
import MovieAdditionForm from "../organisms/MovieAdditionForm.vue";
import AdminPageLayout from "../templates/AdminPageLayout.vue";
import Axios from "axios";
// import Movie from "../../models/admin/movie.js";

export default {
  components: { AdminPageLayout, MovieAdditionForm, AdminMovieList },
  data: function() {
    return {
      page: 1,
      limit: 20,
      totalCount: 0,
      totalPageCount: 0,
      displayMovies: []
    };
  },
  beforeMount: function() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies: function() {
      let endpoint = `/api/admin/movies?page=${this.page}&limit=${this.limit}`;
      Axios.get(endpoint).then(res => {
        this.totalCount = res.data.totalCount;
        this.totalPageCount = res.data.totalPageCount;
        this.displayMovies = res.data.movieList;
      });
    },
    resetMovieList: function() {
      this.fetchMovies();
    }
  }
};
</script>

<style lang="scss" scoped>
.text-align-left {
  text-align: left;
}
</style>
