const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const LoadablePlugin = require('@loadable/webpack-plugin')

// const smp = new SpeedMeasurePlugin() // 测量构建速度
const devMode = process.env.NODE_ENV !== "production";
const pkg = require("./package.json");

module.exports = {
  mode: devMode ? "development" : "production",
  devtool: devMode ? "inline-source-map" : "hidden-source-map",
  entry: path.resolve(__dirname, "./src/components/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: devMode ? "index.js" : "index.min.js",
    library: "design",
    libraryTarget: "umd",
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    alias: {},
  },

  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      // {
      //   test: /\.tsx?$/,
      //   use: [
      //     'babel-loader?cacheDirectory',
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         configFile: 'tsconfig.json'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", {"runtime": "automatic"}],
              "@babel/preset-typescript",
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 抽取样式文件，将css样式文件用link标签引入，使用此loader就不需要用style-loader，即使用了也不会有效果
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: devMode
                  ? "[path][name]__[local]"
                  : "[hash:base64:5]",
              },
              importLoaders: 2, // 一个css中引入了另一个css，也会执行之前两个loader，即postcss-loader和sass-loader
            },
          },
          {
            // 使用 postcss 为 css 加上浏览器前缀
            loader: "postcss-loader",
            options: {
              // options has an unknown property 'plugins';
              postcssOptions: {
                // PostCSS plugin autoprefixer requires PostCSS 8.将autoprefixer降到8.0.0版本
                plugins: [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader", // 使用 sass-loader 将 scss 转为 css
          },
        ],
      },
      {
        test: /(\.(eot|ttf|woff|woff2)|font)$/,
        loader: "file-loader",
        options: { outputPath: "fonts/" },
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: "file-loader",
        options: { outputPath: "images/" },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new LoadablePlugin(),
    // 该插件能够使得指定目录被忽略，从而使得打包变快，文件变小;下面忽略了包含’./locale/'该字段路径的文件目录,但是也使得我们使用的时候不能显示中文语言了，所以这个时候可以手动引入中文语言的目录
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    // 主要用于对打包好的js文件的最开始处添加版权声明
    new webpack.BannerPlugin(`index ${pkg.version}`),
    // 将CSS提取到单独的文件中
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "index.css" : "index.min.css",
      chunkFilename: "[id].css",
    }),
    // devMode ? new webpack.HotModuleReplacementPlugin() : null
  ],
  optimization: {
    minimizer: devMode
      ? []
      : [
          // 压缩js代码
          // new UglifyJsPlugin({
          //   cache: true, // 启用文件缓存并设置缓存目录的路径
          //   parallel: true, // 使用多进程并行运行
          //   sourceMap: true // set to true if you want JS source maps
          // }),
          // webpack v5 使用内置的TerserJSPlugin替代UglifyJsPlugin，因为UglifyJsPlugin不支持ES6
          new TerserJSPlugin({
            // cache: true, // 启用文件缓存并设置缓存目录的路径
            parallel: true, // 使用多进程并行运行
            // sourceMap: true // set to true if you want JS source maps
          }),
          // 用于优化或者压缩CSS资源
          new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"), // 用于优化\最小化 CSS 的 CSS 处理器，默认为 cssnano
            cssProcessorOptions: {
              safe: true,
              discardComments: { removeAll: true },
            }, // 传递给 cssProcesso
            canPrint: true, // 布尔值，指示插件是否可以将消息打印到控制台，默认为 true
          }),
        ],
    sideEffects: false,
  },
};
