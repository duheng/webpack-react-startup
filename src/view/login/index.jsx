import React, {Component} from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';

require('./style.less');

class Login extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="app-login">

                <form action="#" onSubmit={(e) => this._handleLogin(e)}>
                    <TextField
                        floatingLabelText="邮箱地址"
                        hintText="请输入你的常用邮箱地址"
                        style={{width: '100%'}}
                        ref="email"/>

                    <TextField
                        floatingLabelText="密码"
                        hintText="请输入密码"
                        style={{width: '100%', marginBottom: 20}}
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
            email: this.refs.email.getValue(),
            password: this.refs.password.getValue()
        }
    }

    _validate() {

    }

    _handleLogin(e) {
        e.preventDefault();
    }

    _handleRegister(e) {
        e.preventDefault();
    }

}

export default connect()(Login);