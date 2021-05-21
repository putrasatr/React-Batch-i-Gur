import React from 'react';

// import { Link } from 'react-router-dom';

import '../../../Assets/Css/navbarAdmin.css'
import { secureLocalStorage} from '../../../helpers';
import history from '../../../history';


function logout() {
    secureLocalStorage.clear()
    history.push('/welcome')
}


export default function NavbarAdmin() {

    return (
        <div className="wrapper">
            <ul className="navbar-admin-menu">
                <li className="navbar-item">
                    <a href="/welcome" className="navbar-link" onClick={logout}>logout</a>
                </li>
            </ul>
        </div>
    )
}