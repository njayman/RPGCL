import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { logoutuser } from '../../redux/actions/AuthActions';

export default function UserNavBar() {
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <NavLink to="/" >
                <div className="navbar__logo">BGFCL</div>
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
