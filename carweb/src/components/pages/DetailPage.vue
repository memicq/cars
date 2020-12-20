<template>
  <v-container fluid>
    <v-row class="ps-3">
      <v-col cols="9" class="pa-0">
        <v-card class="rounded-0" outlined>
          <div class="iframe-wrapper">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/AaYTtj2LFFw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

					<v-container>
						<v-row align="center" justify="center">
							<v-btn color="pink darken-1" dark>コレダレ</v-btn>
							<v-btn color="pink darken-1" dark>お気に入りに保存</v-btn>
							<v-btn color="gray lighten-1" dark>動画が見られません</v-btn>
						</v-row>
					</v-container>

          <v-card-title>Creepy Nuts / 板の上の魔物【MV】</v-card-title>
					<v-card-subtitle align="start">
						サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。
					</v-card-subtitle>

					<v-card-text>
						<v-chip-group
							v-model="selection"
							active-class="deep-purple accent-4 white--text"
							column
						>
							<v-chip>5:30PM</v-chip>
							<v-chip>7:30PM</v-chip>
							<v-chip>8:00PM</v-chip>
							<v-chip>9:00PM</v-chip>
						</v-chip-group>
					</v-card-text>
					
					<v-divider></v-divider>
					aaa
        </v-card>
      </v-col>
      <v-col cols="3" class="pa-0">
        <recommended-movies-side-bar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RecommendedMoviesSideBar from "../organisms/RecommendedMoviesSideBar.vue";
export default {
  components: {
    RecommendedMoviesSideBar
  },
  data: function() {
    return {
      movieId: this.$route.params.id
    };
  },
  created: function() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData: function() {}
  }
};
</script>

<style lang="scss" scoped>
.iframe-wrapper {
  position: relative;
  width: 100%;
  padding: calc(315 / 560 * 100%) 0 0;
}
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
