'use strict';

import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL} from '../action/user.js';

let defaultUser = {
    email: '',
    avatar: '',
    nick_name: ''
};

/**
 * {
 *  user: {...infos}
 *  fetching: true/false
 *  success: true/false
 *  fail_msg: ...
 * }
 */
export default function user(state = defaultUser, action = {}) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                fetching: true,
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: action.user,
                fetching: false,
                success: true,
                fail_msg: ''
            });
        case LOGIN_FAIL:
            return Object.assign({}, state, {
                fetching: false,
                success: false,
                fail_msg: action.msg
            });
        default :
            return state || {};

    }
}