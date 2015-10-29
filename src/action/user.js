'use strict';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function login(passport) {
    return {
        type: LOGIN,
        passport: passport
    };
}

export function loginSuccess(json) {
    return {
        type: LOGIN_SUCCESS,
        user: json
    };
}

export function loginFail(msg) {
    return {
        type: LOGIN_FAIL,
        msg: msg
    }
}