const webpackMerge = require("webpack-merge");
const spawn = require("child_process").spawn;

const rendererConfig = require("./webpack.renderer.config");

module.exports = webpackMerge.smart(rendererConfig, {
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    },
    devServer: {
        port: 3000,
        compress: true,
        hot: true,
        noInfo: true,
        stats: "errors-only",
        before() {
            spawn("yarn", ["start-main"], {
                shell: true,
                env: process.env,
                stdio: "inherit"
            })
                .on("close", code => process.exit(code))
                .on("error", error => console.log(error));
        }
    }
});
