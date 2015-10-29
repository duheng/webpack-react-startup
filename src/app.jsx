import 'babel-core/polyfill'; // make promise usable

import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import AppRoutes from './router.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducer/user.js';

const injectTapEventPlugin = require('react-tap-event-plugin');
const createHistory = require('history/lib/createHashHistory');

require('module/bootstrap/bootstrap.css');

window.React = React;
window.Perf = require('react-addons-perf');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

global.$ctx = (function () {

    switch(process.NODE_ENV) {
        case 'development':
            return '';
        case 'production':
            return 'http://learnjs.xyz';
        default :
            return '';
    }

}());

let store = global.store = createStore(reducers);

/**
 * Render the main app component. You can read more about the react-router here:
 * https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
 */
ReactDOM.render(
    <Provider store={store}>
        <Router
            history={createHistory({queryKey: false})}
            onUpdate={() => window.scrollTo(0, 0)}
            >
            {AppRoutes}
        </Router>
    </Provider>
    , document.getElementById('wrapper'));