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
      title: "Tom Fielder, Full Stack Developer",
      header: "Tom Fielder",
      metaDesc: "Tom Fielder portfolio site",
      filename: "index.html",
      inject: "body",
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: "./dist",
    open: true,
    liveReload: true,
  },

  mode: "development",
};
