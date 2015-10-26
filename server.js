'use strict';

const express = require('express');
const mongoose = require('mongoose');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');

let router = require('./server/router/index');

let webpackConfig = require('./webpack.config.js');
//webpackConfig.hot = true;

let app = express();

mongoose.connect('mongodb://localhost/asks');

// 如果是开发模式则开启前端开发模式
let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {}));

app.use('/', router);

let server = app.listen(3001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});