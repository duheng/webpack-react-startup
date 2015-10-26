import React, {Component} from 'react';

import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';

require('./style.less');

export default class Login extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="app-login">

                <form action="#">
                    <TextField
                        floatingLabelText="邮箱地址"
                        hintText="请输入你的常用邮箱地址"
                        style={{width: '100%'}} />

                    <TextField
                        floatingLabelText="密码"
                        hintText="请输入密码"
                        style={{width: '100%', marginBottom: 20}} />

                    <RaisedButton
                        label="注  册"
                        primary={true}></RaisedButton>

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

}