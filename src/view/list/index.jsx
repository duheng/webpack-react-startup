import React, {Component} from 'react';
import {SwitchBar, SwitchBarItem} from 'component/switch-bar';

export default class List extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="nav-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12"></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    _handleSelect(value) {
        console.log(this, value);
    }

}