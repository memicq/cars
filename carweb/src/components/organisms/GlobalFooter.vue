<template>
  <div>
    <v-footer class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                class="pink darken-1"
                absolute
                top
                left
                fab
                v-bind="attrs"
                v-on="on"
                @click="showInquery = true"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </template>
            <span>お問い合わせ</span>
          </v-tooltip>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
// import InqueryForm from './InqueryForm.vue';
export default {
  // components: { InqueryForm },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
