const HtmlWebPackPlugin = require("html-webpack-plugin");
const json5 = require('json5');
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const path = require('path');

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, //regex for js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/, //regex for css files
        use: [
          {
            loader: "style-loader" //injects CSS into DOM via <link> tag
          },
          {
            loader: "css-loader", //parse and transform CSS file into modules (opt follows)
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, //regex for images
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ]
  },
  plugins: [htmlWebpackPlugin]
};