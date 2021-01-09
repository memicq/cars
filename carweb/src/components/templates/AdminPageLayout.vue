<template>
  <div>
    <admin-header />
    <v-sheet
      :height="windowHeight"
      id="scrolling-techniques"
      class="overflow-y-auto"
    >
      <v-sheet height="112"></v-sheet>
      <slot name="content"></slot>
      <admin-footer />
    </v-sheet>
  </div>
</template>

<script>
import AdminFooter from "../organisms/AdminFooter.vue";
import AdminHeader from "../organisms/AdminHeader.vue";
export default {
  components: { AdminHeader, AdminFooter },
  data: function() {
    return {
      windowHeight: window.innerHeight
    };
  }
};
</script>

<style lang="scss" scoped></style>
