import React from 'react';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/Menu';

import '../../../Assets/Css/navbarAdmin.css'
import { IconButton } from '@material-ui/core';
import { menuView } from '../../../Component/Actions';
import { useDispatch } from 'react-redux';



export default function NavbarAdmin() {
    const dispatch = useDispatch()

    const [timer, setTimer] = React.useState(Date.now())

    const handleMenu = () => {
        dispatch(menuView(true))
    }

    setInterval(() => setTimer(Date.now()), 1000)

    const time = new Intl.DateTimeFormat("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit'
    }).format(timer);
    const date = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }).format(timer);
    return (
        <div className="wrapper">
            <ul className="navbar-admin-menu flex">
                <li className="navbar-item" onClick={handleMenu}>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </li>

                <li className="navbar-admin">
                    <IconButton className="inline-block">
                        <NotificationsNoneIcon />
                        <div className="new-notif">
                            <span>3</span>
                        </div>
                    </IconButton>
                </li>
                <li>
                    <span style={{ fontWeight: "bolder", color: 'white' }}>{date}<br />
                        <span style={{ fontWeight: "lighter", color: 'white' }}>{time}</span>
                    </span>
                </li>
            </ul>
        </div >
    )
}