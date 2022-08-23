const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.join(__dirname + "/main.ts"),
    output: {
        path: path.join(__dirname + "/build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: ['babel-loader', 'ts-loader'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname + "/index.html")
        }),
    ],
    devServer: {
        port: 3000,
        hot: true,
        host: 'localhost'
    }
}