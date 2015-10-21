import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app.jsx';

require('module/bootstrap/bootstrap.css');

injectTapEventPlugin();

ReactDOM.render(<App></App>, document.getElementById('wrapper'));