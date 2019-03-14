const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin'),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  ErrorOverlayPlugin = require('error-overlay-webpack-plugin'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  sortCSSmq = require('sort-css-media-queries'),
  webpack = require('webpack'),
  path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/code.js',
    './src/stylus/main.styl'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'code.js',
    publicPath: ''
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
        test: /\.(styl|css)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true,
              //publicPath: './'
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require("postcss-cssnext")(),
                require("css-mqpacker")({sort: sortCSSmq})
              ],
              sourceMap: 'inline'
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: 'inline',
            'include css': true
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          'html-loader?',
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            name: "./img/[name].[ext]",
            limit: 10 * 1024
          }
        }, ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new SVGSpritemapPlugin('./src/img/svg/**/*.svg', {
      output: {
          filename: 'img/svg/spritemap.svg',
          svg: {
              sizes: false
          },
          svgo: true,
          svg4everybody: true,
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pug/index.pug',
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
    })
  ],
  devtool: 'eval-source-map'
};