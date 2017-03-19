var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 3000,
        contentBase: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: ['.js', '.vue', '.ts'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': __dirname + 'src',
        },
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true,
                },
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
        ],
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
}