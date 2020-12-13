<template>
  <v-list width="100%">
    <v-subheader>関連動画</v-subheader>
    <v-list-item-group>
      <v-list-item v-for="mov in movies" :key="mov">
        <v-container fluid>
          <v-row>
            <v-col cols="6" class="pa-0">
              <v-img src="https://picsum.photos/id/11/500/300" />
            </v-col>
            <v-col>
              <h5>関連動画テストタイトル</h5>
            </v-col>
          </v-row>
        </v-container>
      </v-list-item>
    </v-list-item-group>

    <v-subheader>おすすめ動画</v-subheader>
    <v-list-item-group>
      <v-list-item v-for="mov in movies" :key="mov">
        <v-container fluid>
          <v-row>
            <v-col cols="6" class="pa-0">
              <v-img src="https://picsum.photos/id/11/500/300" />
            </v-col>
            <v-col>
              <h5>おすすめ動画テストタイトル</h5>
            </v-col>
          </v-row>
        </v-container>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: function() {
    return {
      movies: Array(6)
        .fill()
        .map((_, v) => v)
    };
  }
};
</script>

<style lang="scss" scoped></style>
