import React, {Component} from 'react';

class DropDownItem extends Component{

    constructor(props) {

    }

}

export default class DropDown extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="drop-down-wrapper">
                <div className="drop-down-selected-item"></div>
                <div className="drop-down-list">
                    <div className="drop-down-list-item">
                        <span></span>
                    </div>
                </div>
            </div>
        );

    }

}
