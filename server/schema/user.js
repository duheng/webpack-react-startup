'use strict';

const Schema = require('mongoose').Schema;

module.exports = new Schema({

    email: String,
    password: String,
    avatar: String

});
