'use strict';

const Schema = require('mongoose').Schema;

module.exports = new Schema({

    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(v);
            },
            message: '{value} 不是正确的邮箱地址'
        }
    },
    password: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(\w){8,16}$/.test(v);
            },
            message: '密码不正确'
        }
    },
    avatar: String

});
