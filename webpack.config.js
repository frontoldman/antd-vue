/**
 * Created by 52913 on 2016/4/6.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:[
        './components/index'
    ],
    output:{
        path : path.join(__dirname, 'dist'),
        filename : 'bundle.js',
        publicPath : '/static/'
    },
    module:{
        loaders:[
            {
                test : /\.js$/,
                loaders: ['babel'],
                exclude : ['node_modules'],
                include : __dirname
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: "style!css",
                include : __dirname
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
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    }
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
    module.exports.devtool = '#source-map'
}