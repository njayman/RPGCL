import { SETUSER, LOGOUT, SETADMIN, LOGOUTADMIN } from "../types/AuthTypes";

export const setUsers = () => ({
    type: SETUSER,
})

export const logoutuser = () => ({
    type: LOGOUT,
})

export const setadmins = () => ({
    type: SETADMIN,
})

export const logoutadmin = () => ({
    type: LOGOUTADMIN,
})