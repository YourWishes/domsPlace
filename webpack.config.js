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
    path: '/dist',
    filename: "app.js"
  },

  mode: 'development',

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
        test: /\.svg$|\.webm$|\.mp4$/i,
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
            sizes: [250, 500, 1000, 1500, 2000, 2500],
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
  },

  // initialize the added webpack plugins
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(true)
    })
  ]
};
