const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "[name].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Tom Fielder",
      header: "Tom Fielder",
      metaDesc: "Tom Fielder portfolio site",
      filename: "index.html",
      inject: "body",
      template: "src/index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    open: true,
    liveReload: true,
  },

  mode: "development",
};
