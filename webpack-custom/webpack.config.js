//default node module
const path = require('path');

module.export = {

    devtool: 'cheap-module-eval-source-map',
    //Where the journey starts
    entry: './src/index.js',
    output: {
        path: '',
        filename: 'bundle.js',
        publicPath: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};