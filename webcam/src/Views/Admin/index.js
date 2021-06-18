import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import '../../Assets/Css/mainStyle.css'
import Sidebar from './Sidebar/SidebarAdmin';
import NavbarAdmin from './Navbar/NavbarAdmin.js';
import { isAdmin } from '../../helpers';
import Dashboard from './Dashboard/Dashboard';
import PortalNewsForm from './PortalNews/PortalNewsForm';
import PortalNewsList from './PortalNews/PortalNewsList';

function Admin() {
    const component = "comp"
    if (isAdmin) {
        return (
            <>
                {/* <NavbarAdmin /> */}
                <Sidebar />
                <div className="main-content">
                    <Switch>
                        <Route exact path="/admin/portal-news/add" >
                            <PortalNewsForm />
                        </Route>
                        <Route exact path="/admin/dashboard" >
                            <Dashboard />
                        </Route>
                        <Route exact path="/admin/portal-news" >
                            <PortalNewsList />
                        </Route>
                        <Route exact path="/admin/msntrp" >
                            {component}
                        </Route>
                        <Route exact path="/admin/market-place" >
                            {component}
                        </Route>
                        <Route path="*">
                            <a href="/admin/dashboard"><span>&laquo; Back To Dashboard</span></a>
                            <div> 404 page Not Found</div>
                        </Route>
                    </Switch>
                </div>
            </>
        )
    } else {
        return (
            <Redirect to={{
                pathname: '/'
            }} />
        )

    }
}

export default Admin