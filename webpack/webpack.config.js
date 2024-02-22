const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.ts"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    symlinks: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "..", "public"),
    },
    port: 3000,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "ui-lib",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader", // Use TypeScript loader to transpile TS and TSX files
        options: {
          transpileOnly: true, // Enable transpile-only mode to speed up compilation
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader", // Use Babel to transpile JSX and ES6
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: "url-loader",
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
        },
      },
    ],
  },

  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  mode: "development",

  stats: "errors-only",
  devtool: "source-map", //to debug
};
