`use strict`;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const wepack = require('webpack');
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {app: './src/app/app.module.js'},
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js', //this will be the output file. Output: dist/app.bundle.js
        publicPath: '/'
    },
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        port: 4200,
        historyApiFallback: true,
        open: true
    },
    module: {
        rules: [
            {test: /.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /.html$/, use: 'html-loader', exclude: /index.html/},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /.(png|jpg|jpeg|gif|svg|ico)$/, use: 'file-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),

        new webpack.DefinePlugin({
            '__API_BASE_URL__': JSON.stringify('http://localhost:8080/api/v2'),
            '__WS-BASE-URL__': JSON.stringify('ws://localhost:8080/ws'),
            '__BUILD_VERSION__': JSON.stringify('dev-local'),
            '__NODE_ENV__': JSON.stringify('development')
        })
    ]
    
}