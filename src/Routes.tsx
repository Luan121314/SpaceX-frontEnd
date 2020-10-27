import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import CreateNews from './views/News/CreateNews';
import News from './views/News/News';
import Noticie from './views/News/Noticie';
import CreateUser from './views/User/createUser';
import Profile from './views/User/Profile';
import User from './views/User/User';


const Routes = () => {
    return (
        <BrowserRouter  >
            <Route path="/users" component={User} exact />
            <Route path="/users/register" component={CreateUser} exact />
            <Route path="/users/profile/:id" component={Profile} exact />

            <Route path="/news" component={News} exact />
            <Route path="/news/register" component={CreateNews} exact />
            <Route path="/news/noticie/:id" component={Noticie} exact />
            {/* <Redirect from="/" to="/news" exact /> */}
        </BrowserRouter>
    )
}

export default Routes;