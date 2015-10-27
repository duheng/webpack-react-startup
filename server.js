'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const logger = require('morgan');

// create the app object
let app = express();

mongoose.connect('mongodb://localhost/asks');

// 开发环境设置
if (app.get('env') === 'development') {
    // 如果是开发模式则开启前端开发模式
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    let compiler = webpack(require('./webpack.config.js'));
    app.use(webpackDevMiddleware(compiler, {}));
    app.use(logger('dev'));
}

// middleware usage
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    resave: false,
    secret: 'Joker',
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 30 * 60 * 60 * 1000
    }
}));
// middleware usage end


// router
let router = require('./server/router/index');
app.use('/', router);

let server = app.listen(3001, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Ask Me at http://learnjs.xyz');

});