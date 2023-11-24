const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.NODE_ENV === "production"
const plugins = [
    new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash].css',
        chunkFilename: 'static/css/[name].[contenthash].chunk.css',
    }),
]
plugins.push(new HtmlWebpackPlugin({ title: "monitor-sdk", template: './template.html' }))
module.exports = {
    mode: process.env.NODE_ENV,
    devtool: isProd ? 'hidden-source-map' : 'source-map',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'monitor-sdk.js',
        library: {
            name: 'monitor-sdk',
            type: 'umd',
        },
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "static/resource/[name].[hash][ext]",
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: plugins,
    devServer: {
        port: 8081,
        open: false,
    }
};