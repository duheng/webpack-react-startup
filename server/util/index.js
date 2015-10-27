const md5 = require('md5');

exports.success_request = function (res, data) {

    res.json({
        success: true,
        data: data
    });

};

exports.fail_request = function (res, msg) {

    res.json({
        success: false,
        msg: msg
    });

};

exports.md5Password = function (password, twice) {

    password = md5(password);
    return twice ? md5(password) : password;

};