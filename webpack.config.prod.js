module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};