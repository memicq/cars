<template>
  <admin-page-layout>
    <template slot="content">
      <v-toolbar elevation="0">
        <v-toolbar-title>タグ一覧</v-toolbar-title>
        <v-spacer></v-spacer>
        <tag-addition-form />
      </v-toolbar>

      <admin-tag-list />
    </template>
  </admin-page-layout>
</template>

<script>
import AdminTagList from "../organisms/AdminTagList.vue";
import TagAdditionForm from "../organisms/TagAdditionForm.vue";
import AdminPageLayout from "../templates/AdminPageLayout.vue";
export default {
  components: { AdminPageLayout, TagAdditionForm, AdminTagList }
};
</script>

<style lang="scss" scoped></style>
