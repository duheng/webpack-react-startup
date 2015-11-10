import React, {Component} from 'react';
import {connect} from 'react-redux';
import md5 from 'md5';

import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';

import {EmailReg, PasswordReg} from 'module/util/reg.js';

import {doLogin, doRegister} from '../../action/user.js';

require('./style.less');

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: {
                status: true,
                msg: ''
            },
            password: {
                status: true,
                msg: ''
            }
        };
    }

    render() {

        console.log(this.props);

        let {
          email,
          password
          } = this.state;

        return (
            <div className="app-login">

                <form action="#" onSubmit={(e) => this._handleLogin(e)}>
                    <TextField
                        floatingLabelText="邮箱地址"
                        hintText="请输入你的常用邮箱地址"
                        style={{width: '100%'}}
                        errorText={email.status ? '' : email.msg}
                        ref="email"/>

                    <TextField
                        floatingLabelText="密码"
                        hintText="请输入密码"
                        style={{width: '100%', marginBottom: 20}}
                        errorText={password.status ? '' : password.msg}
                        type="password"
                        ref="password"/>

                    <RaisedButton
                        label="注  册"
                        primary={true}
                        onClick={(e) => this._handleRegister(e)}></RaisedButton>

                    <RaisedButton
                        label="登  录"
                        primary={true}
                        style={{marginRight: 20}}
                        type="submit"
                        style={{float: 'right'}}></RaisedButton>
                </form>

            </div>
        );

    }

    _getValue() {
        return {
            email: this.refs.email.getValue().trim(),
            password: this.refs.password.getValue().trim()
        }
    }

    _validate() {
        let {email, password} = this._getValue();

        if (!EmailReg.test(email)) {
            this.setState({
                email: {
                    status: false,
                    msg: '请输入正确的邮箱'
                }
            });
            return false;
        }

        if (!PasswordReg.test(password)) {
            this.setState({
                password: {
                    status: false,
                    msg: '请输入8-16位数字，字母或下划线'
                }
            });
            return false;
        }

        this.setState({
            email: {
                status: true,
                msg: ''
            },
            password: {
                status: true,
                msg: ''
            }
        });

        return true;

    }

    _handleLogin(e) {
        e.preventDefault();
        if (this._validate()) {
            let passport = this._getValue();
            passport.password = md5(passport.password);
            this.props.dispatch(doLogin(passport));
        }
    }

    _handleRegister(e) {
        e.preventDefault();
        if (this._validate()) {
            let passport = this._getValue();
            this.props.dispatch(doRegister(passport));
        }
    }

}

export default connect(state => ({user: state.user, router: state.router}))(Login);