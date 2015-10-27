'use strict';

const mongoose = require('mongoose');

const router = require('express').Router();
const UserModel = require('../model/user');

const util = require('../util');

router.post('/login', function (req, res, next) {

    let email = req.params.email;
    let password = req.params.password;

    console.log(req.body, req.params);

    UserModel.findOne({
        'email': email,
        'password': password
    }, '_id', function (err, id) {
        if (err) next(err);
        if (id) {
            util.success_request(res, {});
        }
        else {
            util.fail_request(res, '用户名密码不正确');
        }
    });


});

router.post('/register', function (req, res, next) {

    let email = req.params.email;
    let password = req.params.password;

    let user = new UserModel({
        email: email,
        password: password
    });

    user.save(function (err) {
        if (err) {
            console.log(err);
            util.fail_request(res, err.message);
        } else {
            util.success_request(res, {});
        }
    });

});

router.post('/questions/:page', function (req, res, next) {

    let page = req.params.page;

});

router.post('/questions/add', function (req, res, next) {



});

module.exports = router;