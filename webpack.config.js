var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    module: {
        loaders: [{
            test: /src\/.+\.js$/,
            loader: 'babel'
        }]
    },
    output: {
        filename: "dist/index.js",
        library: "Layman",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.SourceMapDevToolPlugin(
            '[file].map', null, "../[resource-path]", "../[resource-path]")
    ]
}
