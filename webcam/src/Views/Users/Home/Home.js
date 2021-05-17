import React, { Component } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import NavBar from '../Navbar/Navbar';

export default class DashboardBox extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Switch>
                    <Route exact path="/home">

                    </Route>
                </Switch>
            </>
        )
    }
}