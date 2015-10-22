import React from 'react';
import {Route, Redirect, IndexRoute,} from 'react-router';

import Layout from './view/layout/index.jsx';
import QuestionList from './view/question-list/index.jsx';


export default (
    <Route path="/" component={Layout}>
        <Redirect from="/" to="/home"></Redirect>
        <Route path="home" component={QuestionList}></Route>

    </Route>
);

