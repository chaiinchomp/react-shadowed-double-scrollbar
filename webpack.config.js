var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/DoubleScrollbar.js',
    output: {
        path: path.resolve('lib'),
        filename: 'DoubleScrollbar.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}