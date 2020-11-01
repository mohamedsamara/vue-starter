/* eslint-disable */

"use strict";

const { join } = require("path");
const { HotModuleReplacementPlugin, EnvironmentPlugin } = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");
const environment = require("./env/dev.env");

const CURRENT_WORKING_DIR = process.cwd();

module.exports = merge(common, {
  mode: "development",
  output: {
    path: join(CURRENT_WORKING_DIR, "build"),
    filename: "[name].js",
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new EnvironmentPlugin(environment),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 3000,
    open: true,
    inline: true,
    compress: true,
    noInfo: false,
    hot: true,
    disableHostCheck: false,
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  },
});
