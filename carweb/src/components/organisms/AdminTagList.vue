<template>
  <v-container fluid>
    <v-row class="pa-0" justify="space-between">
      <v-col cols="4">
        <v-treeview
          :items="tags"
          rounded
          activatable
          hoverable
          :active.sync="active"
          color="pink lighten-2"
          dense
        >
          <template v-slot:prepend="{ item }">
            <v-icon v-if="item.parentTagId">
              mdi-tag
            </v-icon>
          </template>
        </v-treeview>
      </v-col>
      <v-divider vertical />
      <v-col class="text-left">
        <admin-tag-detail :tag="activeTag" @reset="resetTagList" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdminTagDetail from "./AdminTagDetail.vue";
export default {
  components: { AdminTagDetail },
  props: ["tagsProp"],
  data: function() {
    return {
      active: [],
      tags: []
    };
  },
  computed: {
    activeTag: function() {
      const queue = JSON.parse(JSON.stringify(this.tags));
      const activeTagId = this.active[0];
      while (queue.length != 0) {
        let tag = queue.shift();
        if (tag.id == activeTagId) {
          return tag;
        } else if (tag.children.length != 0) {
          tag.children.forEach(child => queue.push(child));
        }
      }
      return null;
    }
  },
  watch: {
    tagsProp: function(newTags) {
      this.tags.splice(0, this.tags.length);
      this.tags.push(...newTags);
    }
  },
  methods: {
    resetTagList: function() {
      this.active = [];
      this.$emit("reset");
    }
  }
};
</script>

<style lang="scss" scoped></style>
