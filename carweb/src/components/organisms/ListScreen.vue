<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" v-for="i in tmp" :key="i" class="p-0">
        <router-link :to="'/movies/' + i">
          <v-card outlined class="rounded-0">
            <v-img src="https://picsum.photos/id/11/500/300" />
            <v-card-text>
              aaaa
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      tmp: Array(12)
        .fill()
        .map((_, v) => v)
    };
  }
};
</script>

<style lang="scss" scoped></style>
