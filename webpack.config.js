module.exports = {
  entry: ['whatwg-fetch', './src/main.js'],
  output: {
    path: './public',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { 
        test: /\.less$/,
        loader: "style!css!less?strictMath&noIeCompat"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'] 
  }
};
