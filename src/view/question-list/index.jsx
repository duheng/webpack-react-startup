import React, {Component} from 'react';

//import Question from '../question';

import List from 'material-ui/lib/lists/list.js';
import ListItem from 'material-ui/lib/lists/list-item.js';
import ListDivider from 'material-ui/lib/lists/list-divider.js';
import Avatar from 'material-ui/lib/avatar.js';

require('./style.less');

export default class QuestionList extends Component{

    constructor(props) {
        super(props);
    }

    getList() {
        let arr = [{
            title: 'this is title',
            content: 'this is content'
        }];
        return arr.map((item, index) => <Question title={item.title} content={item.content} key={index}></Question>);
    }

    render() {

        return (
            <List>
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
        );

    }

}