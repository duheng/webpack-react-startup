import {React, Component} from 'react';
var StylePropable = require('material-ui/lib/mixins/style-propable');

let ReduxNotify = React.createClass({

  displayName: 'ReduxNotify',

  mixins: [StylePropable],

  render() {
    return (
      <div></div>
    );
  }


});

let Notify = React.createClass({

  render() {

    return (
      <div className="notify-message"></div>
    );

  }

})

export default ReduxNotify;