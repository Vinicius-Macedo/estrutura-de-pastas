const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const ImageminPlugin = require("imagemin-webpack");

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
        test: /\.pug$/,
        use: [{ loader: "raw-loader" }, { loader: "pug-html-loader" }],
      },
      //  {
      //   test: /\.html$/,
      //   loader: "html-loader",
      // },
      // {
      //   test: /\.html$/,
      //   loader: "raw-loader",
      // },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff)$/,
      //   use: [
      //     loader : ImageminPlugin.loader,
      //       options: {
      //         bail:false,
      //         cache: false,
      //         imagemOptions: {
      //           this.plugins: [

      //           ]
      //         }
      //       },
      //   ]
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
          { loader: "css-loader", options: { importLoaders: 2 } },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
        
      },
    ],
  },
  plugins: [

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

    new HtmlWebpackPlugin({
      template: "src/index.pug",
      inject: "body",
    }),

    new HtmlWebpackPlugin({
      filename: "pages/noticias.html",
      template: "src/pages/noticias.pug",
      inject: "false",
    }),

    new HtmlWebpackPlugin({
      filename: "partials/footer.html",
      template: "src/partials/footer.pug",
      inject: "body",
    }),

    new HtmlWebpackPlugin({
      filename: "partials/head.html",
      template: "src/partials/head.pug",
      inject: "false",
    }),

    new HtmlWebpackPlugin({
      filename: "partials/header.html",
      template: "src/partials/header.pug",
      inject: "false",
    }),

  ],

  devtool: "source-map",
};
