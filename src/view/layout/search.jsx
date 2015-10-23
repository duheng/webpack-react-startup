import React, {Component} from 'react';

import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import Paper from 'material-ui/lib/paper.js';
import List from 'material-ui/lib/lists/list.js';
import ListItem from 'material-ui/lib/lists/list-item.js';
import ListDivider from 'material-ui/lib/lists/list-divider.js';

export default class Search extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        let result = (
            <div id="search-result" style={{position: 'relative'}}>
                <Paper zDepth={1} rounded={false} style={{position: 'absolute', zIndex: 101, width: '100%'}}>
                    <List>
                        <ListItem primaryText="This is the Question title"></ListItem>
                        <ListDivider inset={false}></ListDivider>
                        <ListItem primaryText="我想提问"></ListItem>
                    </List>
                </Paper>
            </div>
        );

        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-12">

                        <TextField
                            floatingLabelText="输入你的问题"
                            style={{width: '100%'}}></TextField>



                        <RaisedButton label="标签一" style={{marginRight: 10}}></RaisedButton>
                        <RaisedButton label="标签二" style={{marginRight: 10}}></RaisedButton>
                        <RaisedButton label="标签三" style={{marginRight: 10}}></RaisedButton>
                        <RaisedButton label="标签四" style={{marginRight: 10}}></RaisedButton>

                    </div>

                </div>
            </div>
        );

    }

}