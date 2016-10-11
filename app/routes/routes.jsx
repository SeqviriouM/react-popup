import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from 'App';
import Dialog from 'components/Dialog';


export default (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='popup' component={Dialog} />
        </Route>
    </Router>
);
