<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-navigation-drawer permanent>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title class="title">
								Application
							</v-list-item-title>
							<v-list-item-subtitle>
								subtext
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
					<v-divider></v-divider>
          <v-list dense nav>
            <v-list-item 
							v-for="item in menus"
							:key="item"
							link
            >
							{{ item }}
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="10">
        <list-screen />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListScreen from "../organisms/ListScreen.vue";

export default {
  components: {
    ListScreen
	},
	data: function() {
		return {
			menus: Array(24).fill().map((_, v) => "メニュー" + v)
		}
	}
};
</script>

<style lang="scss" scoped></style>
