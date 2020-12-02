import React, { useCallback, useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from "axios";
function Guarentor({ gid, setErrorMessage }) {
    const [guarentor, setGuarentor] = useState(null)
    const getGuarentor = useCallback(async () => {
        try {
            if (gid !== "n/a" || null) {
                const { data } = await axios.get(`/api/user/getuser/${gid}`)
                if (data.success) {
                    setGuarentor(data.user.fullname)
                } else {
                    setErrorMessage(data.message)
                }
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }, [gid, setErrorMessage])
    useEffect(() => {
        getGuarentor()
    }, [getGuarentor])
    return <p>Loan guarentor: {guarentor}</p>
}
export default function UserDash() {
    const { user } = useSelector((state) => state.auth);
    const [usr, setUsr] = useState({})
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const getUser = useCallback(async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(`/api/user/getuser/${user.id}`)
            if (data.success) {
                setUsr(data.user)
            } else {
                setErrorMessage(data.message)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
        setLoading(false)
    }, [user.id])

    useEffect(() => {
        getUser()
    }, [getUser])
    if (loading) {
        return <div><p>loading . . .</p></div>
    } else {

        return (
            <div>
                <div className="mainbody__nav">
                    <p className="mainbody__title">User Dasboard {errorMessage ? <>| {errorMessage}</> : null}</p>
                </div>
                <div className="user__info">
                    <h1>{usr.fullname}</h1>
                    <p>{usr.email}</p>
                    <p>{usr.phone}</p>
                    <p>{usr.position}{", " + usr.designation}</p>
                    <p>{usr.detail}</p>
                </div>
                <div className="user__info">
                    <h2>User Loans</h2>
                    {usr.loans?.map((loan, id) => (
                        <div key={id} className="loancard">
                            <h4>{loan.loanname}</h4>
                            <p>Loan comment: {loan.loancomment}</p>
                            <p>Loan amount: {loan.loanamount}</p>
                            <Guarentor gid={loan.guarentorid} setErrorMessage={e => setErrorMessage(e)} />
                            <p>Loan paid back: {loan.loanpaidback}</p>
                            <div>
                                {loan.audits?.map((audit, id) => (
                                    <fieldset className="loancard__audits" key={id}>
                                        <legend>Audit no.: {id + 1}</legend>
                                        <h4>Audit amount: {audit.amount}</h4>
                                        <p>Audit date: {new Date(audit.auditdate).toLocaleString()}</p>
                                    </fieldset>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
