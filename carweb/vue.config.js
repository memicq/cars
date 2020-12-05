// NOTE: ファイルの設定は、変更すべき
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      "^/api": {
        target: "http://carapi:8081",
//        changeOrigin: true
      }
    }
  }
}