import React, {Component} from 'react';
import cx from 'classnames';

require('style/flat-input.less');

// 使用类之后使用onClick绑定方法的时候需要指定this
// 使用bind(this)或者allow function来指定
export default class FlatInput extends Component{

    constructor(props) {
        super(props);
        this.state = {focus: false};
    }

    render() {

        let {
            id,
            type,
            label,
            onFocus,
            onBlur,
            value,
            errorMsg,
            ...others
            } = this.props;

        let focus = this.state.focus;

        let wrapperClasses = cx({
            "flat-input-wrapper": true,
            focus: focus,
            'with-content': value,
            "flat-input-error": errorMsg
        });

        return (
            <div className={wrapperClasses}>
                <label htmlFor={id} className="flat-input-label">{label}</label>
                <input
                    id={id}
                    type='text'
                    className="flat-input"
                    value={value}
                    onFocus={(e) => this._onFocus(e)}
                    onBlur={(e) => this._onBlur(e)}
                    {...others}/>
                <hr className="flat-input-under-line"/>
                {errorMsg && <p className="flat-input-errorMsg">{errorMsg}</p>}
            </div>
        );

    }

    _onFocus(e) {
        e.preventDefault();
        this.setState({focus: true});
    }

    _onBlur(e) {
        e.preventDefault();
        this.setState({focus: false});
    }

};

// propTypes and defaultProps should be defined
// as properties on the constructor instead of in the class body
FlatInput.propTypes = {};
FlatInput.defaultProps = {};