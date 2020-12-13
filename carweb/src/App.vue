<template>
  <v-app>
    <v-content>
      <global-header />
      <router-view />
      <global-footer />
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
