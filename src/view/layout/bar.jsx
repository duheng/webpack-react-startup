import React, {Component} from 'react';
import {connect} from 'react-redux';

import AppBar from 'material-ui/lib/app-bar';
import PersonOutline from 'material-ui/lib/svg-icons/social/person-outline.js';

import IconMenu from 'material-ui/lib/menus/icon-menu.js';
import MenuItem from 'material-ui/lib/menus/menu-item.js';
import IconButton from 'material-ui/lib/icon-button.js';

import {History} from 'react-router';

let Bar = React.createClass({

    mixins: [History],

    getLoginItem() {
        return <MenuItem primaryText="登 录" onTouchTap={() => this._go('/login')}></MenuItem>;
    },

    getLogoutItem() {
        return <MenuItem primaryText="登 出" onTouchTap={() => this._go('/logout')}></MenuItem>
    },

    getUserInfoItem() {
        return <MenuItem primaryText="我的信息" onTouchTap={() => this._go('/user')}></MenuItem>
    },

    render() {
        let rightIcon = (
            <IconMenu iconButtonElement={<IconButton><PersonOutline /></IconButton>}>
                {this.getLoginItem()}
                {this.getLogoutItem()}
                {this.getUserInfoItem()}
            </IconMenu>
        );

        return (
            <AppBar
                title="Test Material"
                iconElementRight={rightIcon}
                showMenuIconButton={false}>
            </AppBar>
        );
    },

    _go(path, title, query) {
        console.log(this.props.dispatch, this.props.user);
        this.context.history.pushState(title, path, query);
    }

});

export default connect((state) => {return {user: state.user}})(Bar);