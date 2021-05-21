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
                <NavbarAdmin />
                <Sidebar />
                <div className="main-content">
                    <Switch>
                        <Route path="/admin/portal-news/add" >
                            <PortalNewsForm />
                        </Route>
                        <Route path="/admin/dashboard" >
                            <Dashboard />
                        </Route>
                        <Route path="/admin/portal-news" >
                            <PortalNewsList />
                        </Route>
                        <Route path="/admin/msntrp" >
                            {component}
                        </Route>
                        <Route path="/admin/market-place" >
                            {component}
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