const {join} = require('path')
const ConsolePlugin = require('./plugins/ConsolePlugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: join(__dirname, './dist'),
        filename: 'main.js',
    },
    plugins:[new ConsolePlugin({
        title:'这是 console plugin'
    })],
    loaders:[]
}