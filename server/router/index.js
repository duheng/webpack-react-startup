'use strict';

const mongoose = require('mongoose');

const router = require('express').Router();
const UserModel = require('../model/user');

router.post('/login', function (req, res, next) {

    let email = req.params.email;
    let password = req.params.password;
    UserModel.findOne({
        'email': email,
        'password': password
    }, '_id', function (err, id) {
        if (err) next(err);
        console.log(id);
    });
    res.send('success');

});

router.post('/register', function (req, res, next) {

    let email = req.params.email;
    let password = req.params.password;

    let user = new UserModel({
        email: email,
        password: password
    });

    user.save();

    res.send('success');

});

router.post('/questions/:page', function (req, res, next) {

    let page = req.params.page;

});

module.exports = router;