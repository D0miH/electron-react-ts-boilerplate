const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpackMerge = require("webpack-merge");

const baseConfig = require("./webpack.base.config");

module.exports = webpackMerge.smart(baseConfig, {
    entry: "./src/renderer/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "renderer.min.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                },
                sourceMap: true
            })
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/renderer/index.html",
            parallel: true
        })
    ]
});
