import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { menuView } from '../../Component/Actions';
import { secureLocalStorage } from '../../helpers';
import history from '../../history';
import "../Css/style.css"

function MenuView() {
    const dispatch = useDispatch()
    const isMenuView = useSelector(state => state.view)
    const handleMenuView = () => {
        dispatch(menuView(false))
    }
    const logout = () => {
        secureLocalStorage.clear()
        history.push('/welcome')
    }
    useEffect(() => {
        dispatch(menuView(false))
    }, [dispatch])
    return (
        <div className={isMenuView ? "menu-bar" : "d-none"}>
            <div className="menu-bar-right">
                <a href="/welcome">
                    <span onClick={logout}>Log Out</span>
                </a>
            </div>
            <div className="transparent" onClick={handleMenuView}>

            </div>
        </div>
    );
}

export default MenuView;
