import 'babel-core/polyfill'; // make promise usable

import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import AppRoutes from './router.jsx';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { createHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter, pushState } from 'redux-router';
import user from './reducer/user.js';


const injectTapEventPlugin = require('react-tap-event-plugin');

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

const reducer = combineReducers({
    router: routerStateReducer,
    user
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // lets us dispatch() functions
)(createStore);

const store = compose(
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({
      createHistory
  })
)(createStore)(reducer);

//let store = global.store = createStoreWithMiddleware(reducers);

/**
 * Render the main app component. You can read more about the react-router here:
 * https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
 */
ReactDOM.render(
    <Provider store={store}>
        <ReduxRouter>
            <Router
              history={createHistory({queryKey: false})}
              onUpdate={() => window.scrollTo(0, 0)}
              >
                {AppRoutes}
            </Router>
        </ReduxRouter>
    </Provider>
    , document.getElementById('wrapper'));