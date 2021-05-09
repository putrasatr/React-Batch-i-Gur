import "../../Assets/Css/navbar.css"
import { secureLocalStorage } from "../../helpers"
import history from "../../history"

import React from 'react'
function logout() {
    secureLocalStorage.clear()
    history.push('/')
}

export default function NavBar() {
    const email  = secureLocalStorage.getItem('email')
    return (
        <>
            <nav className="navbar">
                <div className="navbar__container">
                    <a href="#home" id="navbar__logo">{email}</a>
                    <div className="navbar__toggle" id="mobile-menu">
                        <span className="bar"></span> <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <a href="#home" className="navbar__links" id="home-page">Home</a>
                        </li>
                        <li className="navbar__item">
                            <a href="#about" className="navbar__links" id="about-page">About</a>
                        </li>
                        <li className="navbar__item">
                            <a href="#services" className="navbar__links" id="services-page"
                            >Services</a
                            >
                        </li>
                        <li className="navbar__btn">
                            <a href="/" className="button" id="signup" onClick={logout}>Log Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}