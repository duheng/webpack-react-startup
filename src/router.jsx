import React from 'react';
import {Route, Redirect, IndexRoute,} from 'react-router';

import Layout from './view/layout/index.jsx';
import QuestionList from './view/question-list/index.jsx';
import User from './view/user/index.jsx';
import Login from './view/login/index.jsx';

export default (
    <Route path="/" component={Layout}>
        <Redirect from="/" to="/home"></Redirect>
        <Route path="home" component={QuestionList}></Route>
        <Route path="user" component={User}></Route>
        <Route path="login" component={Login}></Route>
    </Route>
);

