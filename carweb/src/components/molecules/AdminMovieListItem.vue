<template>
  <div>
    <v-divider></v-divider>
    <v-list-item>
      <v-container fluid class="pl-0 pr-0">
        <v-row>
          <v-col cols="2" class="pa-0">
            <v-img
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
              width="100%"
            />
          </v-col>
          <v-col cols="6" class="py-0 pb-0">
            <a :href="movie.sourceUrl" target="blank"
              ><h5>{{ movie.title }}</h5></a
            >
            <h6 class="gray-subtitle">{{ movie.description }}</h6>
            <v-chip-group mandatory>
              <v-chip small v-for="tag in movie.tagNames" :key="tag">
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-col>
          <!-- <v-divider vertical></v-divider> -->
          <v-col cols="3" class="pt-0 pb-0" align-self="center">
            <v-simple-table dense>
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td>views</td>
                    <td>null</td>
                  </tr>
                  <tr>
                    <td>favs</td>
                    <td>null</td>
                  </tr>
                  <tr>
                    <td>lists</td>
                    <td>null</td>
                  </tr>
                  <tr>
                    <td>comm</td>
                    <td>null</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <!-- <v-divider vertical></v-divider> -->
          <v-col cols="1" class="pt-0 pb-0">
            <!-- <v-btn class="ma-2" outlined small color="indigo">
              <v-icon>mdi-pencil</v-icon>
            </v-btn> -->
            <v-btn
              class="ma-2"
              outlined
              small
              color="red lighten-2"
              @click="deleteMovie"
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
import Axios from "axios";
export default {
  props: ["movie"],
  methods: {
    deleteMovie: function() {
      let endpoint = "/api/admin/movies/" + this.movie.articleId;
      console.log(endpoint);
      Axios.delete(endpoint).then(() => {
        this.$emit('reset');
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.gray-subtitle {
  color: gray;
  font-weight: 200;
  text-align: left;
}
</style>
