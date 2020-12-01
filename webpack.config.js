var _ = require('underscore');
var webpack = require('webpack');
var packageJson = require('./package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var PascalCaseNamePlugin = require('./webpack-pascal-case-name');

var libraryName = 'FormBuilder';
var banner = [
    "form-builder - Form builder library v" + packageJson.version,
    "Copyright (c) 2018-2019 TSV  - http://github.com/tsv2013/form-builder",
    "License: MIT (http://www.opensource.org/licenses/mit-license.php)",
].join("\n");

var BASE_CFG = {
  target: 'web',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
      rules: [
          {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract(
              {
                fallback: 'style-loader',
                use: [{ loader: 'css-loader', options: { sourceMap: true } }, { loader: 'sass-loader', options: { sourceMap: true } }]
              })
          },
          {
            test: /\.(ts|tsx)$/,
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                  //'declaration': true,
                  //'outDir': 'typings/'
              }
            }
          }
      ]
  },
  externals: {
    knockout: {
      root: "ko",
      commonjs2: "knockout",
      commonjs: "knockout",
      amd: "knockout"
    },
  },
  entry: {
    [packageJson.name]: './sources/' + packageJson.name + '.ts',
    uiml: './uiml/index.ts',
  }
};

var DEV_CFG = _.extend({}, BASE_CFG, {
  mode: 'development',
  plugins: [
    new ExtractTextPlugin(
      { filename: '[name].css', disable: false, allChunks: true }
    ),
    new HtmlWebpackPlugin({
      title: libraryName,
      filename: 'index.debug.html',
      inject: 'head',
      template: 'index.html'
    }),
    new PascalCaseNamePlugin()
  ],
  output: {
    library: '[pc-name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  devtool: 'inline-source-map'
});

var PROD_CFG = _.extend({}, BASE_CFG, {
  mode: 'production',
  plugins: [
    new ExtractTextPlugin(
      { filename: '[name].min.css', disable: false, allChunks: true }
    ),
    new HtmlWebpackPlugin({
      title: libraryName,
      filename: 'index.html',
      inject: 'head',
      template: 'index.html'
    }),
    new webpack.BannerPlugin(banner),
    new PascalCaseNamePlugin(),
    //new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    library: '[pc-name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: '[name].min.js'
  }
});

module.exports = [DEV_CFG, PROD_CFG];
