import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { logoutuser } from '../../redux/actions/AuthActions';
import logo from '../../assets/rpgcl_logo.png'

export default function UserNavBar() {
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <NavLink to="/" >
                <img className="navbar__logo" src={logo} alt="logo" />
            </NavLink>
            <NavLink to="/" exact className="navbar__item" activeClassName="navbar__item__active">
                Dashboard
            </NavLink>
            <NavLink to="/settings" className="navbar__item" activeClassName="navbar__item__active">
                Settings
            </NavLink>
            <Link to="/" className="navbar__item" onClick={() => dispatch(logoutuser())}>
                Logout
            </Link>
        </div>
    )
}
