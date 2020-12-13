<template>
  <v-container fluid>
		<v-row class="ps-3">
			<v-col cols="9" class="pa-0">
				<v-card class="rounded-0" outlined>
					<div class="iframe-wrapper">
						<iframe src="https://www.youtube.com/embed/AaYTtj2LFFw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</v-card>
			</v-col>
			<v-col cols="3" class="pa-0">
				<recommended-movies-side-bar />
			</v-col>
		</v-row>
  </v-container>
</template>

<script>
import RecommendedMoviesSideBar from '../organisms/RecommendedMoviesSideBar.vue'
export default {
  components: {
    RecommendedMoviesSideBar
	},
	data: function () {
		return {
			movieId: this.$route.params.id
		}
	},
	created: function () {
		this.fetchData()
	},
	watch: {
    '$route': 'fetchData'
  },
	methods: {
		fetchData: function() {

		}
	}
}
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