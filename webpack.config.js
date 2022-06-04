const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CNAMEWebPackPlugin = require("cname-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

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
    new CNAMEWebPackPlugin({
      domain: "tomfielder.co.uk",
    }),
    new FaviconsWebpackPlugin("./src/assets/tf-icon.png"),
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
      {
        test: /\.pdf$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
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
