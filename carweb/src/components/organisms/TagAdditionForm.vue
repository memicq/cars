<template>
	<v-dialog
		v-model="showDialog"
		max-width="800"
		persistent
	>
		<template v-slot:activator="{ on, attrs }">
			<v-btn 
				color="pink darken-1" 
				class="mx-2" 
				fab 
				dark 
				small
				v-bind="attrs" 
				v-on="on"
			>
				<v-icon dark>
					mdi-plus
				</v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-card-title>タグ追加フォーム</v-card-title>
			<v-spacer></v-spacer>
			<v-card-subtitle class="text-align-left">タグを追加します。</v-card-subtitle>
			<v-form>
				<v-container fluid class="pt-0">
					<v-row>
						<v-col class="pt-0" cols="6">
							<v-text-field
								label="タグ名"
								filled
								:rules="[rules.required]"
							></v-text-field>
						</v-col>
						<v-col class="pt-0" cols="6">
							<v-autocomplete
								v-model="select"
								:loading="loading"
								:items="items"
								:search-input.sync="search"
								cache-items
								class="mx-4"
								flat
								hide-no-data
								hide-details
								label="親タグ"
								filled
								:rules="[rules.required, rules.inItems]"
							>
							</v-autocomplete>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					color="grey lighten-1"
					dark
					@click="showDialog = false"
				>
					キャンセル
				</v-btn>
				<v-btn
					color="pink darken-1"
					dark
					@click="showDialog = false"
				>
					動画を追加
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
  data: function() {
		return {
			showDialog: false,
			select: false,
			loading: false,
			items: ['タグ名1', 'タグ名2', 'タグ名3', 'タグ名4', 'タグ名5', 'タグ名6', 'タグ名7', 'タグ名8', 'タグ名9'],
			rules: {
				required: value => !!value || 'Required.',
				inItems: value => this.items.indexOf(value) != -1 || 'Parent tag only.'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.text-align-left {
	text-align: left;
}
</style>