/**
 * Created by 52913 on 2016/5/13.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:[
        './components/index'
    ],
    output:{
        path : path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename : 'bundle.js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test : /\.js$/,
                loader: 'babel',
                exclude : /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style!css",
                include : __dirname
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    //module.exports.devtool = '#source-map'
}