'use strict';

const mongoose = require('mongoose');

const router = require('express').Router();
const UserModel = require('../model/user');

const util = require('../util');

router.post('/login', function (req, res, next) {

    let email = req.body.email;
    let password = req.body.password;

    UserModel.findOne({
        'email': email,
        'password': util.md5Password(password)
    }, '_id', function (err, id) {
        console.log(err, id);
        if (err) next(err);
        if (id) {
            console.log(id);
            util.success_request(res, {});
        }
        else {
            util.fail_request(res, '用户名密码不正确');
        }
    });

});

router.post('/register', function (req, res, next) {

    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        util.fail_request(res, '请输入正确的用户名密码');
        return;
    }

    UserModel.find({
        "email": email
    }).then(function (pr) {
        if (pr && pr.length > 0) {
            util.fail_request(res, '该邮箱已注册');
        }
        else {
            let user = new UserModel({
                email: email,
                password: util.md5Password(password, true)
            });

            user.save(function (err) {
                if (err) {
                    util.fail_request(res, err.toString());
                } else {
                    util.success_request(res, {});
                }
            });
        }
    });

});

router.post('/questions/:page', function (req, res, next) {
    // 分页显示问题

    let page = req.params.page;

});

router.post('/questions/add', function (req, res, next) {
    // 新增一个问题

    let title = req.body.title;

});

router.post('/search', function (req, res, next) {
    // 根据关键字搜索问题

});

module.exports = router;