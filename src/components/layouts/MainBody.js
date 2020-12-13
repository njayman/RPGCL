import React, { Fragment } from 'react'
import {
    Route,
} from "react-router-dom";
import Auth from '../authpartials/Auth';
import AddUser from '../pages/AddUser';
import AuditLoan from '../pages/AuditLoan';
import Dash from '../pages/Dash';
import IssueLoan from '../pages/IssueLoan';
import Setting from '../pages/Setting';
import User from '../pages/User';
import Users from '../pages/Users';
import NavBar from './NavBar';
import { useSelector } from "react-redux";
import UserDash from '../pages/UserDash';
import UserNavBar from './UserNavBar';
import ViewLoan from '../pages/ViewLoan';
import RequestLoan from '../pages/RequestLoan';
import TestHomeLoan from '../pages/TestHomeLoan'

export default function MainBody() {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const { isAdminAuthenticated, admin } = useSelector(state => state.adminauth)

    return (
        <Fragment>
            {(isAdminAuthenticated && admin.role === "admin") && (
                <Fragment>
                    <NavBar />
                    <div className="mainbody">
                        <Route exact path="/" component={Dash} />
                        <Route path="/users" component={Users} />
                        <Route path="/user/:id" component={User} />
                        <Route path="/issueloan/:id" component={IssueLoan} />
                        <Route path="/auditloan/:id" component={AuditLoan} />
                        <Route path="/adduser" component={AddUser} />
                        <Route path="/settings" component={Setting} />
                    </div>
                </Fragment>
            )}
            {(isAuthenticated && user.role === "user") && (
                <Fragment>
                    <UserNavBar />
                    <div className="mainbody">
                        <Route exact path="/" component={UserDash} />
                        <Route exact path="/viewloan/:id/:loanid" component={ViewLoan} />
                        <Route exact path="/requestloan/:loanid" component={RequestLoan} />
                        <Route exact path="/requesthomeloan" component={TestHomeLoan} />
                    </div>
                </Fragment>
            )}
            {(!isAuthenticated && !isAdminAuthenticated) && (
                <Fragment>
                    <div className="authbody">
                        <Auth />
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}
