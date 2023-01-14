const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "client"),
  },
  optimization: {
    usedExports: true,
  },
  mode: process.env.NODE_ENV,
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "./client"),
      publicPath: "/",
    },
    port: 8080,
    hot: true,
    proxy: {
      "/user": "http://localhost:3000",
      "/list": "http://localhost:3000",
      "/film": "http://localhost:3000",
      "/friend": "http://localhost:3000",
      "/logout": "http://localhost:3000",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./client/index.html",
    }),
    new Dotenv()
  ],
};
