<template>
  <div class="wrapper">
    <div v-if="tag">
      <v-container fluid>
        <v-row>
          <h2>{{ tag.name }}</h2>
          <!-- <div style="background: lightgray; width: 100%; height: 100%;">
						under adjustment
					</div> -->
          <v-spacer />
          <tag-addition-form
            v-if="!tag.parentTagId"
            type="AddChild"
            :parentTag="tag"
            @reset="resetTagList"
          />
          <v-btn plain @click="deleteTag">
            タグ削除
          </v-btn>
        </v-row>
      </v-container>
    </div>
    <div class="false-container" v-else>
      <v-icon>mdi-tag</v-icon>
      親タグを選択してください
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import TagAdditionForm from "./TagAdditionForm.vue";
export default {
  props: ["tag"],
  components: { TagAdditionForm },
  methods: {
    resetTagList: function() {
      this.$emit("reset");
    },
    deleteTag: function() {
      let endpoint = "/api/admin/tags/" + this.tag.id;
      Axios.delete(endpoint).then(res => {
        console.log(res);
        this.$emit("reset");
      });
    }
  }
};
</script>

<style lang="scss">
// $card-outlined-border-width: 0;

.wrapper {
  width: 100%;
  height: 100%;
}

.false-container {
  width: 100%;
  height: 100%;
  background: #eeeeee;
}
</style>
