import React, {Component} from 'react';

export default class AppBarTitle extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        let {
            text,
            ...others
            } = this.props;

        return <h1 className="app-bar-title" {...others}>{text}</h1>

    }

}