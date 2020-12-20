<template>
	<v-app-bar 
		absolute
		scroll-target="#scrolling-techniques"
		color="gray darken-4"
		dark
	>
		<v-app-bar-nav-icon></v-app-bar-nav-icon>
		<v-toolbar-title>DeadOrPornAdmin</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-heart</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-dots-vertical</v-icon>
		</v-btn>
		<template v-slot:extension>
				<v-tabs align-with-title>
					<v-tab to="/admin/movies">動画管理</v-tab>
					<v-tab to="/admin/tags">タグ管理</v-tab>
					<v-tab to="/admin/report">レポート</v-tab>
				</v-tabs>
			</template>
	</v-app-bar>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>