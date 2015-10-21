import React from 'react';
import FlatInput from 'component/flat-input/index.jsx';

export default React.createClass({

    getInitialState() {
        return {value: ''};
    },

    render() {
        return (
            <header id="app-header" className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <FlatInput
                            id="search"
                            label="搜一下"
                            value={this.state.value}
                            onChange={this._changeValue} />
                    </div>
                    <div className="col-sm-4">

                    </div>
                </div>
            </header>
        );
    },

    _changeValue(e) {
        let target = e.target;
        this.setState({value: target.value});
    }

});