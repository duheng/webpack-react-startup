import React, {Component} from 'react';

import AppBar from 'material-ui/lib/app-bar';
import PersonOutline from 'material-ui/lib/svg-icons/social/person-outline.js';

import IconMenu from 'material-ui/lib/menus/icon-menu.js';
import MenuItem from 'material-ui/lib/menus/menu-item.js';
import IconButton from 'material-ui/lib/icon-button.js';

export default class Layout extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        let rightIcon = (
            <IconMenu iconButtonElement={<IconButton><PersonOutline /></IconButton>}>
                <MenuItem primaryText="test"></MenuItem>
                <MenuItem primaryText="test2"></MenuItem>
            </IconMenu>
        );

        return (
            <AppBar
                title="WebFuture"
                iconElementRight={rightIcon}
                showMenuIconButton={false}>
            </AppBar>
        );
    }

}