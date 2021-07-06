<template>
  <v-list>
    0 - {{ movieTotalCount }} 件表示 / {{ movieTotalCount }} 件中
    <admin-movie-list-item
      v-for="mov in movies"
      :key="mov.articleId"
      :movie="mov"
      @reset="resetMovieList"
    />
  </v-list>
</template>

<script>
import AdminMovieListItem from "../molecules/AdminMovieListItem.vue";

export default {
  components: { AdminMovieListItem },
  props: ["displayMovies", "totalCount"],
  data: function() {
    return {
      movies: [],
      movieTotalCount: 0
    };
  },
  watch: {
    displayMovies: function(newMovies) {
      this.movies = newMovies;
    },
    totalCount: function(newTotalCount) {
      this.movieTotalCount = newTotalCount;
    }
  },
  methods: {
    resetMovieList: function() {
      this.$emit('reset');
    }
  }
};
</script>

<style lang="scss" scoped></style>
