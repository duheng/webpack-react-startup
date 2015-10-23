import React, {Component} from 'react';

import List from 'material-ui/lib/lists/list.js';
import ListItem from 'material-ui/lib/lists/list-item.js';
import ListDivider from 'material-ui/lib/lists/list-divider.js';
import Avatar from 'material-ui/lib/avatar.js';

require('./style.less');

export default class User extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div className="app-user-info">
                    <p className="app-user-avatar">
                        <img src="//cdn.v2ex.com/gravatar/dd099add5e94f771c29f8afa125cb639?d=retro" alt="User Avatar"/>
                    </p>
                    <p>
                        Jokcylou@hotmail.com
                    </p>
                </div>
                <List subheader="我的提问">
                    <ListItem
                        leftAvatar={<Avatar src="//cdn.v2ex.com/gravatar/dd099add5e94f771c29f8afa125cb639?d=retro"/>}
                        primaryText="This is The title"
                        secondaryText="This is content"/>
                    <ListItem
                        leftAvatar={<Avatar src="//cdn.v2ex.com/gravatar/dd099add5e94f771c29f8afa125cb639?d=retro"/>}
                        primaryText="This is The title"
                        secondaryText="This is content"/>
                    <ListItem
                        leftAvatar={<Avatar src="//cdn.v2ex.com/gravatar/dd099add5e94f771c29f8afa125cb639?d=retro"/>}
                        primaryText="This is The title"
                        secondaryText="This is content"/>
                    <ListItem
                        leftAvatar={<Avatar src="//cdn.v2ex.com/gravatar/dd099add5e94f771c29f8afa125cb639?d=retro"/>}
                        primaryText="This is The title"
                        secondaryText="This is content"/>
                </List>
            </div>
        );

    }

}