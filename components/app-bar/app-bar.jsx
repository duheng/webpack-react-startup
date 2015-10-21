import React, {Component} from 'react';
import cx from 'classnames';

export default class AppBar extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        let {
            children,
            className,
            ...others
            } = this.props;

        let classes = cx('app-bar', className);

        return (
            <div className={classes} {...others}>
                {children}
            </div>
        )

    }

}