<template>
  <div>
    <v-app-bar color="white" id="global-header">
      <router-link to="/">
        <v-toolbar-title>DeadOrPorn</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn icon @click="expandSearchBar = !expandSearchBar">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge content="2" value="2" color="red darken-4" overlap>
          <v-icon>mdi-heart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-expand-transition>
      <search-bar v-show="expandSearchBar" />
    </v-expand-transition>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  components: { SearchBar },
  data: function() {
    return {
      expandSearchBar: false
    };
  }
};
</script>

<style lang="scss" scoped>
#global-header {
  z-index: 100;
}
</style>
