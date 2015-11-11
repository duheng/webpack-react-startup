'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const logger = require('morgan');
const mailer = require('nodemailer');

// create the app object
let app = express();


app.set('transport', mailer.createTransport({
    service: "Mailgun",
    auth: {
        user: "postmaster@sandbox96229.mailgun.org",
        pass: "8os-j1p0uxh0"
    }
}));

mongoose.connect('mongodb://localhost/asks');

// middleware usage
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    resave: false,
    secret: 'Joker',
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
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

    console.log('Ask Me at http://learnjs.xyz', host, port);

});