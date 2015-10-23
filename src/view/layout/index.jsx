import React, {Component} from 'react';

import Bar from './bar.jsx';
import Search from './search.jsx';
import Paper from 'material-ui/lib/paper.js';

export default class Layout extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Bar></Bar>
                <Search></Search>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Paper zDepth={1} rounded={false} style={{marginTop: 20}}>
                                {this.props.children}
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}