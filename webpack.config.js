const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname,'node_modules')],
                query: {}
            }
        ]
    },
    stats: {
      colors: true
    },
    devtool: 'source-map'
};
