<template>
  <v-toolbar id="search-bar" height="auto">
    <v-container fluid>
      <v-row>
        <v-col class="input-box">
          <v-chip-group>
            <v-chip v-for="tag in searchTags" :key="tag" close>
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-col>
        <v-col cols="auto" align-self="end">
          <v-btn large dark>
            SEARCH
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-chip-group column>
          <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
        </v-chip-group>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  data: function() {
    return {
      tags: Array(100)
        .fill()
        .map((_, v) => "タグ" + v),
      searchTags: []
    };
  }
};
</script>

<style lang="scss" scoped>
#search-bar {
  background-color: #f8f8f8;

  .input-box {
    background-color: white;
    border-bottom: 1px gray solid;
  }
}
</style>
