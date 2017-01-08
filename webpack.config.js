const prod = process.env.NODE_ENV === "production";
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/public"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.css$/,
        loader: "style!css?importLoaders=1!postcss"
      },
      {
        test: /\.jpg$/,
        loader: "file?name=img/[hash].[ext]"
      }
    ]
  }
};
