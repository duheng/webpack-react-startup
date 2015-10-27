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