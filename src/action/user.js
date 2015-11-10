'use strict';

import request from 'module/util/request.js';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

import {pushState} from 'redux-router';

export function login(passport) {
    return {
        type: LOGIN
    };
}

export function register() {
    return {
        type: REGISTER
    }
}

export function doLogin(passport) {
    return (dispatch) => {
        dispatch(login());

        request.post(global.$ctx + '/login', passport)
          .then(resp => {
              console.log(resp);
              if (resp.success) {
                  dispatch(pushState(null, '/'));
                  dispatch(loginSuccess(resp));
              }
              else {
                  dispatch(pushState(null, '/login/error'));
                  dispatch(loginFail(resp));
              }
          });

    }
}

export function doRegister(passport) {
    return (dispatch) => {
        dispatch(register());

        request.post(global.$ctx + '/register', passport)
          .then(resp => {
              console.log(resp);
              if (resp.success) {
                  dispatch(pushState(null, '/login/error'));
              }
          });
    }
}

export function loginSuccess(json) {
    return {
        type: LOGIN_SUCCESS,
        payload: {user: json.data}
    };
}

export function loginFail(json) {
    return {
        type: LOGIN_FAIL,
        payload: {
            msg: json.msg
        }
    }
}