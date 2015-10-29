'use strict';

const Schema = require('mongoose').Schema;

module.exports = new Schema({

  title: {
    type: String,
    validate: {
      validator: function (v) {
        return v.trim().length > 0 && v.trim().length < 40;
      },
      message: '标题不正确'
    }
  },
  content: {
    type: String,
    validate: {
        validator: function (v) {
            return v.trim().length > 0;
        },
        message: '内容长度不能为0'
    }
  },
  avatar: String

});
