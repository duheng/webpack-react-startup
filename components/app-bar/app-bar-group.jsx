import React, {Component} from 'react';

export default class AppBarGroup extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        let {
            children,
            ...others
            } = this.props;

        return (
            <div className="app-bar-group" {...others}>
                {children}
            </div>
        );

    }

}