import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { logoutadmin } from '../../redux/actions/AuthActions';

export default function NavBar() {
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <NavLink to="/" >
                <div className="navbar__logo">BGFCL</div>
            </NavLink>
            <NavLink to="/" exact className="navbar__item" activeClassName="navbar__item__active">
                Dashboard
            </NavLink>
            <NavLink to="/users" className="navbar__item" activeClassName="navbar__item__active">
                Users
            </NavLink>
            <NavLink to="/settings" className="navbar__item" activeClassName="navbar__item__active">
                Settings
            </NavLink>
            <Link to="/" className="navbar__item" onClick={() => dispatch(logoutadmin())}>
                Logout
            </Link>
        </div>
    )
}
