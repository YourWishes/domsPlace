// Copyright (c) 2018 Dominic Masters
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

//Includes
const
  path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CompressionPlugin = require("compression-webpack-plugin"),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin")
;

//Constants
const SOURCE_DIRECTORY = './public';
const ENTRY_FILE = 'index.jsx';
const ENTRY_WRAPPER = 'index.html';

module.exports = function(server, app) {
  //Create our dirs
  let entryDir = path.join(app.getPublicDirectory(), '..', 'public');

  //Create our output
  let output = {};

  //Set the entry point
  output.entry = path.join(entryDir, ENTRY_FILE);

  //Set the output
  output.output = {
    path: app.getPublicDirectory(),
    filename: "app.js"
  }

  //Set Resolves
  output.resolve = {
    modules: ['node_modules', SOURCE_DIRECTORY],
    extensions: ['.js', '.jsx', '.css', '.scss' ]
  };

  //Setup Modules
  output.module = {
    rules: [
      {
        test: /\.jsx?$|\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$|\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'sass-loader',
        ]
      },

      {
        test: /\.svg|\.webm|\.mp4$/i,
        use: [{
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
            context: 'public'
          }
        }]
      },

      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        use: [{
          loader: "responsive-loader",
          options: {
            sizes: [128, 256, 500, 750, 1000, 1250, 1500, 2000, 2250, 2500],
            name: "[path][name]_[width]x.[ext]",
            context: 'public'
          }
        }]
      },

      {
        test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      }
    ]
  };

  //Setup the Plugins
  let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(SOURCE_DIRECTORY, ENTRY_WRAPPER),
    filename: ENTRY_WRAPPER,
    inject: true
  });

  let UglifyPluginConfig = new UglifyJsPlugin({
    test: /\.js($|\?)/i
  });

  let MiniCssExtractConfig = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  })

  //Set the plugins
  output.plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    MiniCssExtractConfig,
    HTMLWebpackPluginConfig
  ];

  //Minimization
  output.optimization = {
    minimize: true,
    minimizer: [
      UglifyPluginConfig
    ]
   };

  //Now setup the production values
  output.devtool = 'source-map';

  return output;
}
