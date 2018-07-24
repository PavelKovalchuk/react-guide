//default node module
const path = require('path');
const autoprefixer = require('autoprefixer');

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
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            'ident': 'postcss',
                            plugins: () => {
                                autoprefixer({
                                    browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                });
                            }
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }
};