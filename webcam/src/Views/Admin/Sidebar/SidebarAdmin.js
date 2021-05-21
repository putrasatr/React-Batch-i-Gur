import React, { useState } from "react"
import { Link } from 'react-router-dom';

import '../../../Assets/Css/sidebar.css'
import { isMaxWidth } from "../../../helpers";
import route from "../admin.route.json"


export default function Sidebar() {
    const path = window.location.pathname
    const url = path.slice(7)

    const [isSideBar, setSideBarView] = useState(false)

    const handleSideBar = () => {
        setSideBarView(!isSideBar)
    }
    return (
        <div className={isSideBar ? "main-wrapper-active" : "main-wrapper"}>
            <div className="sidebar-header">
                <span className={isMaxWidth() ? 'd-none' : "btn-sidebar-view"} onClick={handleSideBar}>
                    <i className={!isSideBar ? 'fa fa-arrow-right icon-sv-active' : "fa fa-arrow-right icon-sidebar-view"}></i>
                </span>
            </div>
            <div className={isSideBar ? "sidebar-body-active" : "sidebar-body"}>
                <ul className="nav">
                    {route.map(({ title, path, icon, urll },i) => {
                        return (
                            <li key={i} className={url.includes(urll) ? 'nav-item active' : 'nav-item '}>
                                <Link to={path} className="nav-link" onClick={handleSideBar}>
                                    <span className="link-title"><i className={icon}></i>  {title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}