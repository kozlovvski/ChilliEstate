const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const { prod_Path, src_Path } = require("./path");

module.exports = {
  entry: {
    main: "./" + src_Path + "/index.js"
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[contenthash].[ext]",
              outputPath: "images/"
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            interpolate: true
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, prod_Path), {
      root: process.cwd()
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: "./" + src_Path + "/html/index.html",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: "./" + src_Path + "/html/o-nas.html",
      filename: "o-nas.html"
    })
  ]
};
