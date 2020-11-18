import React, { Component } from "react";
import Register from '../auth/Register';
import Login from '../auth/Login';
// import AddUserForm from 'path/....';

import { Switch, Route, Link, Redirect } from "react-router-dom";

const routes = (
    <Route path="/register" component={Register}>
        {/* {/* <IndexRoute component={UserList}/> */}
        <Route path="Login" component={Login}/> */}
    </Route>
);

export default routes;