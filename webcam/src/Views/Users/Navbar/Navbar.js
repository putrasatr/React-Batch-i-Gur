import "../../../Assets/Css/navbar.css"
import { secureLocalStorage } from "../../../helpers"
import history from "../../../history"
import Loading from "../../../Assets/Background/Loadnig"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

function logout() {
    secureLocalStorage.clear()
    history.push('/welcome')
}

export default function NavBar() {
    const email = secureLocalStorage.getItem('email')

    const [isLoading, setisLoading] = useState(true)

    setTimeout(() => setisLoading(false), 2000)
    return (
        <div>
            {isLoading && <Loading />}
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" id="navbar__logo">{email}</Link>
                    <div className="navbar__toggle" id="mobile-menu">
                        <span className="bar"></span> <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <Link to="/" className="navbar__links" id="home-page">Home</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/philosophy" className="navbar__links" id="about-page">Philosophy</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/market-place" className="navbar__links" id="about-page">Market Place</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/news" className="navbar__links" id="about-page">News</Link>
                        </li>
                        <li className="navbar__btn">
                            <a href="/welcome" className="button" id="signup" onClick={logout}>Log Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}