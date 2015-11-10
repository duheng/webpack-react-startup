'use strict';

import {LOGIN, REGISTER, LOGIN_SUCCESS, LOGIN_FAIL} from '../action/user.js';

let defaultUser = {
    email: '',
    avatar: ''
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
                syncing: true
            });
        case REGISTER:
            return Object.assign({}, state, {
                syncing: true
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload.user,
                syncing: false,
                error_msg: ''
            });
        case LOGIN_FAIL:
            return Object.assign({}, state, {
                syncing: false,
                error_msg: action.payload.msg
            });
        default :
            return state || {};

    }
}