module.exports = {
  module: {
    rules: [
      {
        test: /\.(mjs|tsx?|jsx?)$/,
        use: [
          {
           "loader": "babel-loader",
          }
         ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use:[
          {
           "loader": "babel-loader",
         
          }
         ],
        include: /[\\/]node_modules[\\/](@storybook\/node-logger|are-you-es5|better-opn|boxen|chalk|commander|find-cache-dir|find-up|fs-extra|json5|node-fetch|pkg-dir|resolve-from|semver)/
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          "style-loader",
          {
           "loader": "css-loader",
           "options": {
            "importLoaders": 1
           }
          },
          {
           "loader": "postcss-loader",
           "options": {
            "ident": "postcss",
            "postcss": {}
           }
          }
         ]
      },
      {
        test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        loader: 'file-loader',
        options: { name: 'static/media/[name].[hash:8].[ext]', esModule: false }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: 'url-loader',
        query: { limit: 10000, name: 'static/media/[name].[hash:8].[ext]' }
      }
    ],
  },
  resolve: {
    extensions: ['mjs', '.ts', '.js', '.json', '.tsx', '.jsx', '.css'],
  }
}