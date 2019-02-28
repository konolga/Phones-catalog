//commonJS export => export

const path = require ('path');
module.exports={
    mode: 'none',
    entry: './src',
    output:{
        path: path.resolve(__dirname, 'src'),//__dirname global
        filename: 'bundle.js'
    },
    devtool: "source-map"
}