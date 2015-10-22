import React, {Component} from 'react';

import Paper from 'material-ui/lib/paper.js';
require('./style.less');

export default class Question extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Paper zDepth={1} rounded={false} className="question">
                <h1 className="question-title">{this.props.title}</h1>
                <div className="question-content">{this.props.content}</div>
            </Paper>
        );

    }

}