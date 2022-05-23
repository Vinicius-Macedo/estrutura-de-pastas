const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].js",
    // assetModuleFilename: "assets/img/[name][ext]",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    // historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "raw-loader",
      },
      // {
      //   test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
      //   type: "asset/resource",
      // },
      // {
      //   test: /\.js$/,
      //   loader: "babel-loader",
      //   exclude: /node_modules/,
      // },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/index.html",
      inject: "body",
    }),

    new MiniCssExtractPlugin({
      filename: "assets/css/main.css",
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/img"),
          to: path.resolve(__dirname, "dist/assets/img"),
        },
      ],
    }),
  ],

  devtool: "source-map",
};
