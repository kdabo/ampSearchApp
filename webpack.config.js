var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src', 'index')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/static/js'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', {allChunks: true}),
        new webpack.HotModuleReplacementPlugin(),
       new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
            }
        ]

    }
};