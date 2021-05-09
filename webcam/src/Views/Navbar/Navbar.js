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
            <nav class="navbar">
                <div class="navbar__container">
                    <a href="#home" id="navbar__logo">{email}</a>
                    <div class="navbar__toggle" id="mobile-menu">
                        <span class="bar"></span> <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="navbar__menu">
                        <li class="navbar__item">
                            <a href="#home" class="navbar__links" id="home-page">Home</a>
                        </li>
                        <li class="navbar__item">
                            <a href="#about" class="navbar__links" id="about-page">About</a>
                        </li>
                        <li class="navbar__item">
                            <a href="#services" class="navbar__links" id="services-page"
                            >Services</a
                            >
                        </li>
                        <li class="navbar__btn">
                            <a href="/" class="button" id="signup" onClick={logout}>Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}