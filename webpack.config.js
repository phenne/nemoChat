const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, 'webapp/src/index.js'),
    output: {
        path: path.resolve(__dirname, 'webapp/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: 'babel-loader'
            },
            {
                test: /\.jsx/,
                use: ['react-hot-loader/webpack']
            },
            {
                test: /\.styl/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!stylus-loader"
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                include: [
                    path.resolve(__dirname, 'webapp/src/images')
                ],
                use: 'url-loader'
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                include: [
                    path.resolve(__dirname, 'webapp/src/fonts')
                ],
                use: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'webapp/dist'),
        compress: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'nemo chat',
            filename: path.resolve(__dirname, 'webapp/dist/index.html'),
            template: path.resolve(__dirname, 'webapp/src/index.html')
        }),
        new ExtractTextWebpackPlugin ('styles.css')
    ]
}


