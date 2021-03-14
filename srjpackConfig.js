const {join} = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: join(__dirname, './dist'),
        filename: 'main.js',
    }
}