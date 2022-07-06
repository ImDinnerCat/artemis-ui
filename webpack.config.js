const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        './src/js/index.js',
        './src/scss/style.scss',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/artemis-ui.min.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: 'artemis-ui.min.css'}
                    },
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],

    devServer: {
        static: path.join(__dirname, './'),
        port: 9000,
        open: true
    }
};