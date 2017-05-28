import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Layout, Login, Home, Signup } from '../ui/Components/index';

Meteor.startup(() => {
    let app = document.getElementById('render-target');
    render(
        <Router history={browserHistory}>
            <Route component={Layout} path="/">
                {
                    Meteor.userId ? (
                        <IndexRoute component={Home} />
                    ) : (
                        <IndexRoute component={Login} />
                    )
                }
                <Route path='signup' component={Signup}/>
            </Route>
        </Router>,
        app
    );
});
