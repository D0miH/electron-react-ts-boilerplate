const webpackMerge = require("webpack-merge");
const path = require("path");

const baseConfig = require("./webpack.base.config");

module.exports = webpackMerge.merge(baseConfig, {
    target: "electron-main",
    entry: "./src/main/main.ts",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.min.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    }
});
