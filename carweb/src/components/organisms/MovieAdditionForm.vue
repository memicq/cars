<template>
  <v-dialog v-model="showDialog" max-width="800" persistent>
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
      <v-card-title>動画追加フォーム</v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle class="text-align-left"
        >追加したい動画に関する情報を入力してください。追加した動画は承認後に投稿されます。</v-card-subtitle
      >
      <v-container fluid class="pt-0">
        <v-row>
          <v-col class="pt-0">
            <v-text-field label="動画のオリジナルURL" filled></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey lighten-1" dark @click="showDialog = false">
          キャンセル
        </v-btn>
        <v-btn color="pink darken-1" dark @click="showDialog = false">
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
      showDialog: false
    };
  }
};
</script>

<style lang="scss" scoped>
.text-align-left {
  text-align: left;
}
</style>
