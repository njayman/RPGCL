import { SETADMIN, LOGOUTADMIN } from "../types/AuthTypes";
import jwt from 'jsonwebtoken';
const checkadmin = () => {
    if (localStorage.getItem('admintoken')) {
        return jwt.decode(localStorage.getItem('admintoken'))
    } else {
        return {}
    }
}

const checkAuthenticated = () => {
    if (localStorage.getItem('admintoken')) {
        return true
    } else {
        return false
    }
}

const initialState = {
    isAdminAuthenticated: checkAuthenticated(),
    admin: checkadmin()
};

const adminAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETADMIN:
            return {
                ...state,
                isAdminAuthenticated: true,
                admin: checkadmin()
            }
        case LOGOUTADMIN:
            localStorage.removeItem('admintoken')
            return {
                ...state,
                isAdminAuthenticated: false,
                admin: {}
            }
        default:
            return state;
    }
}

export default adminAuthReducer