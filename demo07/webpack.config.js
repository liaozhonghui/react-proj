const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');



module.exports = [{
    entry: __dirname + '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [{
                    loader: 'css-loader', // translates CSS into CommonJS
                },{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'sass-loader' // creates style nodes from JS strings
                },{
                    loader: 'less-loader', // compiles Less to CSS
                    options: { javascriptEnabled: true, sourceMap: true },
                }],
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    }
                }],
            }
        ]
    }
}]