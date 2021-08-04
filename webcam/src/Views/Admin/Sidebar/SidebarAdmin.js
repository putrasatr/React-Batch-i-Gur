import React, { useState } from "react"
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from "@material-ui/core";

import './sidebar.css'
import { isMaxWidth } from "../../../helpers";
import route from "../admin.route"


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
                    <IconButton>
                        <ArrowForwardIosIcon className={!isSideBar ? 'fa fa-arrow-left icon-sv-active' : "fa fa-arrow-left icon-sidebar-view"} />
                    </IconButton>
                </span>
            </div>
            <div className={isSideBar ? "sidebar-body-active" : "sidebar-body"}>
                <ul className="nav">
                    {route.map(({ title, path, icon, urll }, i) => {
                        return (
                            <li key={i} className="nav-item ">
                                <Link to={path} className={url.includes(urll) ? "nav-link-active" : "nav-link"} onClick={handleSideBar}>
                                    <span className="link-title"><i className={icon}></i>  {title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => { }}>
                    <span>logout</span>
                </button>
            </div>
        </div>
    )
}