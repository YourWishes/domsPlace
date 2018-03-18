const
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin')
;

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

// export webpack config
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './public/index.jsx'
  ],

  output: {
    path: __dirname + '/dist',
    filename: "app.js"
  },

  resolve: {
    modules: ['node_modules', './public'],
    extensions: ['.js', '.jsx', '.css', '.scss' ]
  },

  // declare loaders to be used in webpack
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },

      {
        test: /\.scss$|\.css$/i,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },

      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg|\.webm|\.mp4$/i,
        loader: "file-loader?name=[path][name].[ext]"
      },

      {
        test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      }
    ]
  },

  // initialize the added webpack plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin()
  ]
};
