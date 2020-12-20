<template>
  <admin-page-layout>
    <template slot="content">
      <v-toolbar elevation="0">
        <v-toolbar-title>動画一覧</v-toolbar-title>
        <v-spacer></v-spacer>
        <movie-addition-form />
      </v-toolbar>

      <admin-movie-list />

      <v-container>
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="6"
          ></v-pagination>
        </div>
      </v-container>
    </template>
  </admin-page-layout>
</template>

<script>
import AdminMovieList from '../organisms/AdminMovieList.vue';
import MovieAdditionForm from '../organisms/MovieAdditionForm.vue';
import AdminPageLayout from '../templates/AdminPageLayout.vue';

export default {
  components: { AdminPageLayout, MovieAdditionForm, AdminMovieList },
  data: function() {
    return {
    }
  }
};
</script>

<style lang="scss" scoped>
.text-align-left {
  text-align: left;
}
</style>
