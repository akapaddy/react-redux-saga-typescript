const HtmlWebpackPlugin = require('html-webpack-plugin'),
    OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    webpack = require('webpack'),
    path = require('path'),
    pkg = require('./package.json');

const appConfig = {
    ...pkg.config,
    ENV: process.env.NODE_ENV || 'production',
    SERVER: process.env.SERVER || 'na',
    VERSION: pkg.version
};

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    entry: ['@babel/polyfill', './main.tsx'],
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      noEmitOnErrors: true
    },
    devServer: {
        contentBase: './dist', // Content base
        inline: true, // Enable watch and live reload
        host: 'localhost',
        port: 8080,
        stats: 'errors-only'
    },
    module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              "babelCore": "@babel/core", // needed for Babel v7
            },        
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html', //Name of file in ./dist/
          template: 'index.html', //Name of template in ./src
          hash: true,
        }),
        new MiniCssExtractPlugin({
          filename: `styles/atg[name].v${appConfig.VERSION}.${appConfig.VERSION_NAMESPACE}.css`
        })
    ]
}