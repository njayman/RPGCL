import { SETUSER, LOGOUT } from "../types/AuthTypes";
import jwt from 'jsonwebtoken';
const checkuser = () => {
    if (localStorage.getItem('usertoken')) {
        return jwt.decode(localStorage.getItem('usertoken'))
    } else {
        return {}
    }
}

const checkAuthenticated = () => {
    if (localStorage.getItem('usertoken')) {
        return true
    } else {
        return false
    }
}

const initialState = {
    isAuthenticated: checkAuthenticated(),
    user: checkuser()
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETUSER:
            return {
                ...state,
                isAuthenticated: true,
                user: checkuser()
            }
        case LOGOUT:
            localStorage.removeItem('usertoken')
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            }
        default:
            return state;
    }
}

export default authReducer;
