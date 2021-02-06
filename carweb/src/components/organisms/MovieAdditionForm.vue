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
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-title>動画追加フォーム</v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle class="text-align-left">
          追加したい動画に関する情報を入力してください。追加した動画は承認後に投稿されます。
        </v-card-subtitle>

        <v-card-text class="text-align-left">
          <v-chip-group column>
            <v-chip color="orange" label outlined>PORNHUB</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-container fluid class="pt-0">
          <v-row>
            <v-col class="pt-0">
              <v-text-field
                label="動画のオリジナルURL"
                filled
                v-model="sourceUrl"
                :rules="urlRules"
                @change="onInputTextField($event)"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-divider class="mx-4 mb-4" v-if="didFetch"></v-divider>

          <v-progress-circular
            indeterminate
            color="primary"
            v-if="isFetching"
          ></v-progress-circular>

          <v-row v-if="didFetch">
            <v-col class="pt-0">
              <v-text-field
                label="動画タイトル"
                filled
                v-model="title"
                :rules="[v => !!v || 'title is requred']"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row v-if="didFetch">
            <v-col class="pt-0 mb-4">
              <div class="iframe-responsive">
                <iframe
                  :src="embeddedUrl"
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen
                ></iframe>
              </div>
            </v-col>
          </v-row>

          <v-row v-if="didFetch">
            <v-col class="pt-0">
              <v-textarea
                filled
                label="説明文"
                v-model="description"
                :rules="[v => !!v || 'description is requred']"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-autocomplete
            v-if="didFetch"
            filled
            chips
            small-chips
            label="タグ"
            v-model="selectedTags"
            :items="flatTags"
            item-text="name"
            item-value="id"
            multiple
          >
            <template v-slot:selection="data">
              <v-chip
                v-bind="data.attrs"
                close
                :input-value="data.selected"
                @click="data.select"
                @click:close="removeSelectedTag(data.item)"
              >
                {{ data.item.name }}
              </v-chip>
            </template>
            <template v-slot:item="data">
              <v-list-item-content>
                <v-list-item-title v-html="data.item.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="data.item.parent"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey lighten-1" class="white--text" @click="cancel">
            キャンセル
          </v-btn>
          <v-btn
            :disabled="!valid"
            color="pink lighten-3"
            class="white--text"
            @click="fetchMore"
            v-if="!didFetch"
          >
            情報取得
          </v-btn>
          <v-btn
            :disabled="!valid"
            color="pink darken-1"
            class="white--text"
            @click="submit"
            v-if="didFetch"
          >
            動画を追加
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import Axios from "axios";
export default {
  data: function() {
    return {
      showDialog: false,
      isFetching: false,
      didFetch: false,

      sourceUrl: null,
      title: null,
      description: null,
      embeddedUrl: null,
      valid: true,
      urlPattern: /https?:\/\/([\w-]+.)+[\w-]+(\/[\w- .?%&=]*)?/,
      urlRules: [
        v => !!v || "original url is requred",
        v => this.validateUrl(v) || "invalid url format"
      ],

      selectedTags: [],
      tags: []
    };
  },
  beforeMount: function() {
    this.fetchTag();
  },
  computed: {
    flatTags: function() {
      return this.tags.flatMap(rootTag =>
        rootTag.children.map(tag => {
          return { id: tag.id, name: tag.name, parent: rootTag.name };
        })
      );
    }
  },
  methods: {
    fetchMore: function() {
      if (this.$refs.form.validate()) {
        this.fetchMovie(this.sourceUrl);
      }
    },
    submit: function() {
      this.showDialog = false;
      if (this.$refs.form.validate()) {
        let endpoint = "/api/admin/movies";
        let data = {
          title: this.title,
          description: this.description,
          sourceUrl: this.sourceUrl,
          embeddedUrl: this.embeddedUrl,
          tagIds: this.selectedTags
        };
        Axios.post(endpoint, data).then(() => {
          this.$emit("reset");
        });
      }
    },
    cancel: function() {
      this.$refs.form.resetValidation();
      this.resetMovie();
      this.showDialog = false;
    },
    onInputTextField: function() {
      this.didFetch = false;
    },
    validateUrl: function(urlString) {
      return this.urlPattern.test(urlString);
    },
    fetchMovie: function(validUrl) {
      this.isFetching = true;
      this.title = null;

      const { hostname } = new URL(validUrl);
      if (hostname == "jp.pornhub.com") {
        let endpoint = "/api/admin/fetch/movies";
        Axios.post(endpoint, { urlString: validUrl })
          .then(res => {
            this.sourceUrl = res.data.sourceUrl;
            this.title = res.data.title;
            this.embeddedUrl = res.data.embeddedUrl;
            this.isFetching = false;
            this.didFetch = true;
          })
          .catch(() => {
            this.didFetch = false;
            this.isFetching = false;
          });
      }
    },
    fetchTag: function() {
      let endpoint = "/api/admin/tags";
      Axios.get(endpoint).then(res => {
        this.tags = res.data;
      });
    },
    resetMovie: function() {
      this.sourceUrl = null;
      this.title = null;
      this.embeddedUrl = null;
      this.didFetch = false;
    },
    removeSelectedTag: function(item) {
      const index = this.selectedTags.indexOf(item.name);
      if (index >= 0) this.selectedTags.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.text-align-left {
  text-align: left;
}

.iframe-responsive {
  position: relative;
  width: 100%;
  padding: calc(315 / 560 * 100%) 0 0;
}

.iframe-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
