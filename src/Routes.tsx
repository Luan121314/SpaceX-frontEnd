import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import AlterNotice from './views/Notice/AlterNotice';
import CreateNews from './views/Notice/CreateNotice';
import Notices from './views/Notice/Notices';
import Notice from './views/Notice/Notice';
import AlterUser from './views/User/AlterUser';
import CreateUser from './views/User/CreateUser';
import Profile from './views/User/Profile';
import User from './views/User/User';


const Routes = () => {
    return (
        <BrowserRouter  >
            <Route path="/users" component={User} exact />
            <Route path="/users/register" component={CreateUser} exact />
            <Route path="/users/profile/:id" component={Profile} exact />
            <Route path="/users/alter/:id" component={AlterUser} exact />

            <Route path="/notices" component={Notices} exact />
            <Route path="/notices/register" component={CreateNews} exact />
            <Route path="/notices/notice/:id" component={Notice} exact />
            <Route path="/notices/alter/:id" component={AlterNotice} exact />
            <Redirect from="/" to="/notices" exact />
        </BrowserRouter>
    )
}

export default Routes;