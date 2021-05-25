import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import isAdmin from '../../helpers/private.admin.js';

import NavBar from './Navbar/Navbar.js';
import UserRoute from './route.user.json'

export default function Users() {
    if (isAdmin) {
        return (
            <Redirect to={{
                pathname: '/admin/dashboard'
            }} />

        )
    } else {
        return (
            <>
                <NavBar />
                <Switch>
                    {UserRoute.map(({ component, path }, i) => {
                        return (<Route key={i} exact path={path} >
                            <div>{component}</div>
                        </Route>
                        )
                    })}
                    <Route path="*">
                        <a href="/"><span>Back To Home</span></a>
                        <div>Not Found</div>
                    </Route>
                </Switch>
            </>
        )
    }
}