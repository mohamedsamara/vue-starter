/* eslint-disable */

"use strict";

const { join } = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  entry: [join(CURRENT_WORKING_DIR, "src/main.js")],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue", ".json", ".css", ".scss", ".html"],
  },
  plugins: [
    new Dotenv({
      path: join(CURRENT_WORKING_DIR, ".env"),
      safe: true,
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: join(CURRENT_WORKING_DIR, "public/index.html"),
    }),
  ],
};
