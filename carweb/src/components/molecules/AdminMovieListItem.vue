<template>
	<div>
		<v-divider></v-divider>
		<v-list-item>
			<v-container fluid class="pl-0 pr-0">
				<v-row>
					<v-col cols="2" class="pa-0">
						<v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" width="100%"/>
					</v-col>
					<v-col cols="6" class="py-0 pb-0">
						<h5>動画タイトル</h5>
						<h6 class="gray-subtitle">サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。サブタイトルです。</h6>
						<v-chip-group mandatory>
							<v-chip small>タグ1</v-chip>
							<v-chip small>タグ1</v-chip>
							<v-chip small>タグ1</v-chip>
							<v-chip small>タグ1</v-chip>
						</v-chip-group>
					</v-col>
					<!-- <v-divider vertical></v-divider> -->
					<v-col cols="3" class="pt-0 pb-0" align-self="center">
						<v-simple-table dense>
							<template v-slot:default>
								<tbody>
									<tr>
										<td>views</td>
										<td>100</td>
									</tr>
									<tr>
										<td>favs</td>
										<td>100</td>
									</tr>
									<tr>
										<td>lists</td>
										<td>100</td>
									</tr>
									<tr>
										<td>comm</td>
										<td>100</td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
					</v-col>
					<!-- <v-divider vertical></v-divider> -->
					<v-col cols="1" class="pt-0 pb-0">
						<v-btn
							class="ma-2"
							outlined
							small
							color="indigo"
						>
							<v-icon>mdi-pencil</v-icon>
						</v-btn>
						<v-btn
							class="ma-2"
							outlined
							small
							color="indigo"
						>
							<v-icon>mdi-delete</v-icon>
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-list-item>
	</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.gray-subtitle {
	color: gray;
	font-weight: 200;
	text-align: left;
}
</style>