const React = require('react');
const cx = require('classnames');
require('./style.less');

const SvgIcon = React.createClass({

    propTypes: {
        onMouseEnter: React.PropTypes.func,
        onMouseLeave: React.PropTypes.func,
        viewBox: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            onMouseEnter: () => {},
            onMouseLeave: () => {},
            viewBox: '0 0 24 24',
        };
    },

    render() {
        const {
            children,
            className,
            viewBox,
            ...other,
            } = this.props;

        let classes = cx('svg-icon', className);


        return (
            <svg
                {...other}
                viewBox={viewBox}
                className={classes}>
                {children}
            </svg>
        );
    }
});

module.exports = SvgIcon;
