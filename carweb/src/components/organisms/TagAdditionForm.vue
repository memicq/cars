<template>
  <v-dialog v-model="showDialog" max-width="800" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="pink darken-1" class="mx-2" dark v-bind="attrs" v-on="on">
        {{ buttonText }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>{{ titleText }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle class="text-align-left">{{
        descriptionText
      }}</v-card-subtitle>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container fluid class="pt-0">
          <v-row>
            <v-col class="pt-0">
              <v-text-field
                label="追加タグ名"
                filled
                v-model="tagName"
                :rules="[v => !!v || '名前を入力してください。']"
              ></v-text-field>
            </v-col>
            <v-col class="pt-0" v-if="type == 'AddChild'">
              <v-text-field
                label="親タグ名"
                filled
                :value="parentTag.name"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey lighten-1" dark @click="cancel">
          キャンセル
        </v-btn>
        <v-btn color="pink darken-1" dark @click="submit">
          タグを追加
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Axios from "axios";

export default {
  props: ["type", "parentTag"],
  data: function() {
    return {
      showDialog: false,
      valid: true,
      tagName: null
    };
  },
  computed: {
    buttonText: function() {
      if (this.type == "AddChild") {
        return "小タグを追加";
      } else if (this.type == "AddParent") {
        return "親タグを追加";
      } else {
        return "謎のボタン";
      }
    },
    titleText: function() {
      if (this.type == "AddChild") {
        return "タグ追加フォーム";
      } else if (this.type == "AddParent") {
        return "親タグ追加フォーム";
      } else {
        return "謎のフォーム";
      }
    },
    descriptionText: function() {
      if (this.type == "AddChild") {
        return "タグを追加します。親タグは指定する必要があります。";
      } else if (this.type == "AddParent") {
        return "最も階層が上の親タグを追加します。(現状親子関係は階層1つまでに制限)";
      } else {
        return "謎のフォーム";
      }
    },
    parentTagId: function() {
      if (this.parentTag != null) {
        return this.parentTag.id;
      } else {
        return null;
      }
    }
  },
  methods: {
    resetForm: function() {
      this.$refs.form.resetValidation();
      this.tagName = null;
    },
    cancel: function() {
      this.$refs.form.resetValidation();
      this.resetForm();
      this.showDialog = false;
    },
    submit: function() {
      this.$refs.form.validate();
      this.addParentTag();
      this.resetForm();
      this.showDialog = false;
    },
    addParentTag: function() {
      let endpoint = "/api/admin/tags";
      Axios.post(endpoint, {
        name: this.tagName,
        parentTagId: this.parentTagId
      }).then(() => {
        this.$emit("reset");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.text-align-left {
  text-align: left;
}
</style>
