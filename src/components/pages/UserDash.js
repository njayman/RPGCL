import React, { useCallback, useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function UserDash() {
    const { user } = useSelector((state) => state.auth);
    const [usr, setUsr] = useState({})
    const [loading, setLoading] = useState(false)
    const [loanTypes, setLoanTypes] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()

    const checkLoanIssued = (loanname) => {
        return usr?.loans?.some(loan => {
            return loan.loanname === loanname
        })
    }

    const getLoanTypes = async () => {
        try {
            const { data } = await axios.get(`/api/user/get/loantype`)
            setLoanTypes(data.loantypes)
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

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
        getLoanTypes()
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
                    <h1>{usr?.fullname}</h1>
                    <p>{usr?.email}</p>
                    <p>{usr?.phone}</p>
                    <p>{usr?.position}{", " + usr?.designation}</p>
                    <p>{usr?.detail}</p>
                </div>
                <div className="user__info">
                    <h2>User Loans</h2>
                    <div className="loancontainer">

                        {usr.loans?.map((lt, id) => (
                            <div key={id} id="loanissued" className="user__loans">
                                <h3>{lt.loanname}</h3>
                                <p>Status: {checkLoanIssued(lt.loanname) ? "Issued" : "Not Issued"}</p>

                                <button className="action__button" id={usr._id} onClick={e => history.push({
                                    pathname: `/viewloan/${e.target.id}/${lt._id}`,
                                })}>View loan status</button>
                            </div>
                        ))}
                        {loanTypes?.filter(ln => {
                            return !usr.loans?.some(l => {
                                return l._id !== ln._id && ln.loanname === l.loanname
                            })
                        }).map((lt, id) => (
                            <div key={id} id="loannotissued" className="user__loans">
                                <h3>{lt.loanname}</h3>
                                <p>Status: Not Issued</p>
                                <button id={usr._id} className="action__button" onClick={e => history.push({
                                    pathname: `/requestloan/${e.target.id}`,
                                    state: lt
                                })}>Request Loan</button>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="action__button" onClick={() => history.push('/requesthomeloan')}>Request Home Loan</button>
            </div>
        )
    }
}
