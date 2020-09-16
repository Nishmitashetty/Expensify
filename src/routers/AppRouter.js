import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardExpensePage from '../components/DashboardExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

//behind the scenes react-router is creating instance of browserhistory and register it with BrowserRouter..
const AppRouter = () =>
 (
    <Router history={history} >
    <div>
    <Switch>
    <PublicRoute path="/" component={LoginPage} exact={true} />
    <PrivateRoute path="/dashboard" component={DashboardExpensePage} exact={true} />  
    <PrivateRoute path="/create" component={AddExpensePage} />
    <PrivateRoute path="/edit/:id" component={EditExpensePage} />
    <Route path="/help" component={HelpExpensePage} />
    <Route component={NotFoundPage} />
    </Switch>
    </div>
    </Router>
);

export default AppRouter;

