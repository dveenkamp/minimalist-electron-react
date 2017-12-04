const path = require('path');

module.exports = {
    entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
