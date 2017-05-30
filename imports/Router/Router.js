import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { USER, ADMIN_USER, CHEF_USER } from '../environment/environment';
import { Login, Signup } from '../ui/Components/index';
import Recipes from '../ui/Components/Recipes/Recipes';
import Listrecipes from '../ui/Components/Listrecipes/Listrecipes';
import Listordenes from '../ui/Components/Listordenes/Listordenes';
import Favoriterecipes from '../ui/Components/FavoriteRecipes/FavoriteRecipes';
import Adminsignup from '../ui/Components/AdminSignup/Adminsignup';
import Chefsignup from '../ui/Components/Chefsignup/Chefsignup';
import Layout from '../ui/Components/Layout';;


const authenticatedPages = ['/recipes', '/dashboard', '/orders', '/favorites'];
const unathenticatedPages = ['/signup','/'];
let routes = (
    <Router history={browserHistory}>
        <Route component={Layout} path="/">
            <IndexRoute component={Login}/>
            <Route path='recipes' component={Listrecipes}/>
            <Route path='orders' component={Listordenes}/>
            <Route path='favorites' component={Favoriterecipes}/>
            <Route path='dashboard' component={Recipes}/>
            <Route path='signup' component={Signup}/>
            <Route path='adminsignup' component={Adminsignup}/>
            <Route path='chefsignup' component={Chefsignup}/>
        </Route>
    </Router>
);

Tracker.autorun(() => {
    const isAuthenticated = Meteor.user();
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unathenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if (isAuthenticated) {
        if (isUnauthenticatedPage && (isAuthenticated.profile.role === USER)) {
            browserHistory.push('/recipes');
        }else if (isUnauthenticatedPage && (isAuthenticated.profile.role === CHEF_USER)) {
            browserHistory.push('/orders');
        }else if (isUnauthenticatedPage && (isAuthenticated.profile.role === ADMIN_USER)) {
            browserHistory.push('/dashboard');
        }else if (!isAuthenticated && isAuthenticatedPage){
            browserHistory.push('/');
        }
    }
});

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'))
});
