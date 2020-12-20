<template>
  <v-app>
    <v-content>
      <global-header v-show="!isAdmin" />
      <router-view />
      <global-footer v-show="!isAdmin" />
    </v-content>
  </v-app>
</template>

<script>
import GlobalFooter from "./components/organisms/GlobalFooter.vue";
import GlobalHeader from "./components/organisms/GlobalHeader.vue";

export default {
  components: {
    GlobalFooter,
    GlobalHeader
  },
  data: function () {
    return {
      // constants
      ADMIN_PREFIX: "/admin",

      // flags
      isAdmin: false,
    }
  },
  created: function() {
    this.updateRoute();
  },
  watch: {
    $route: "updateRoute"
  },
  methods: {
    updateRoute() { 
       this.isAdmin = this.$route.path.startsWith(this.ADMIN_PREFIX);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
