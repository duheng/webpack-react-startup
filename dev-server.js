var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: {target: "http://localhost:3001"}
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('webpack dev server listening at localhost:3000');
});