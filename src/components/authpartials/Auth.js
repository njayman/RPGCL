import React, { Fragment, useState } from 'react'
import AdminForm from './AdminForm'
import UserForm from './UserForm'
import logo from '../../assets/rpgcl_logo.webp'

function Auth() {
    const [role, setRole] = useState('user')
    return (
        <Fragment>
            <div className="authbody__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="authbody__nav">
                <button className={`authbody__nav__button ${role === 'user' ? "active" : ""}`} value="user" onClick={e => setRole(e.target.value)}>User</button>
                <button className={`authbody__nav__button ${role === 'admin' ? "active" : ""}`} value="admin" onClick={e => setRole(e.target.value)}>Admin</button>
            </div>
            <div className='authbody__container'>
                {role === "user" && (
                    <UserForm />
                )}
                {role === "admin" && (
                    <AdminForm />
                )}
            </div>
        </Fragment >
    )
}

export default Auth;