import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Layout, Login, Recipes, Signup } from '../ui/Components/index';


const authenticatedPages = ['/recipes'];
const unathenticatedPages = ['/signup','/'];
let routes = (
    <Router history={browserHistory}>
        <Route component={Layout} path="/">
            <IndexRoute component={Login}/>
            <Route path='recipes' component={Recipes}/>
            <Route path='signup' component={Signup}/>
        </Route>
    </Router>
);

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unathenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if (isUnauthenticatedPage && isAuthenticated) {
        browserHistory.push('/recipes');
    }else if (!isAuthenticated && isAuthenticatedPage){
        browserHistory.push('/');
    }
});

Meteor.startup(() => {
    console.log(Meteor.userId());
    ReactDOM.render(routes, document.getElementById('app'))
});
