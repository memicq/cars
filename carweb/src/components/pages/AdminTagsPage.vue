<template>
  <admin-page-layout>
    <template slot="content">
      <v-toolbar elevation="0">
        <v-toolbar-title>タグ一覧</v-toolbar-title>
        <v-spacer></v-spacer>
        <tag-addition-form type="AddParent" @reset="resetTagList" />
      </v-toolbar>

      <v-divider></v-divider>
      <admin-tag-list :tags-prop="tags" @reset="resetTagList" />
    </template>
  </admin-page-layout>
</template>

<script>
import Axios from "axios";
import AdminTagList from "../organisms/AdminTagList.vue";
import TagAdditionForm from "../organisms/TagAdditionForm.vue";
import AdminPageLayout from "../templates/AdminPageLayout.vue";
export default {
  components: { AdminPageLayout, TagAdditionForm, AdminTagList },
  data: function() {
    return {
      tags: []
    };
  },
  beforeMount: function() {
    this.fetchTags();
  },
  methods: {
    updateTag: function(tags) {
      this.tags.splice(0, this.tags.length);
      this.tags.push(...tags);
    },
    fetchTags: function() {
      let endpoint = "/api/admin/tags";
      Axios.get(endpoint).then(res => {
        this.updateTag(res.data);
        console.log(this.tags);
      });
    },
    resetTagList: function() {
      this.fetchTags();
    }
  }
};
</script>

<style lang="scss" scoped></style>
