const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
});

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
              test: /\.(js|jsx)?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react', '@babel/preset-env'],
                },
              },
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /.(png|svg|jpg|gif|woff|ico|woff2|eot|ttf|otf)$/,
              use: ['file-loader'],
            },
        ],
    },
    plugins: [
      htmlWebpackPluginConfig
    ],
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8080,
        static: {
            publicPath: '/build/',
        },
        proxy: {
            '/user': 'http://localhost:3000',
            '/question': 'http://localhost:3000'
        },
        // hot: true,
        historyApiFallback: true,
    }
};