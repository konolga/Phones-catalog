//commonJS export => export
//node_modules/.bin/webpack or npx webpack
const path = require ('path');
module.exports={
    mode: 'none',
    entry: './src',
    output:{
        path: path.resolve(__dirname, 'src'),//__dirname-->from global
        filename: 'bundle.js'
    },
    watch: true, // after the initial build continue to watch for changes, otherwise use npx webpack or ./node_modules/.bin/webpack
    devtool: "source-map",//to see original source while debugging
    watchOptions: {
        aggregateTimeout: 600
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          }
        ]
      }
}