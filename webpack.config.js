const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules", path.resolve(__dirname, "./src")],
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.build.json",
        },
      },
      {
        test: /\.ts$/,
        loader: "tslint-loader",
        enforce: "pre",
        exclude: /node_modules/,
        options: {
          configFile: "tslint.json",
          emitErrors: true,
        },
      },
    ],
  },
};
