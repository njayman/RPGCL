import { Fragment, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

export default function User({ match }) {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState([])
    const [loanTypes, setLoanTypes] = useState([])
    const [errorMessage, setErrorMessage] = useState(null);
    const getUser = useCallback(async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(`/api/admin/get/user/${match.params.id}`)
            setUser(data.user)
            if (!data.success) {
                setErrorMessage(data.message)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
        setLoading(false)
    }, [match.params.id])

    const getLoanTypes = async () => {
        try {
            const { data } = await axios.get(`/api/admin/get/loantype`)
            setLoanTypes(data.loantypes)
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    const checkLoanIssued = (loanname) => {
        return user.loans.some(loan => {
            return loan.loanname === loanname
        })
    }

    useEffect(() => {
        getUser()
        getLoanTypes()
    }, [getUser])
    if (loading)
        return <div>Loading . . .</div>
    else
        return (
            <Fragment>
                <div className="mainbody__nav">
                    <p className="mainbody__title">User Details {errorMessage ? <>| {errorMessage}</> : null}</p>
                    <button className="action__button" onClick={() => history.push('/users')}>All Users</button>
                </div>
                <div className="user__profile">
                    <h1>{user.fullname}</h1>
                    <p>{user.position} | {user.designation}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
                <div className="loancontainer">
                    {user.loans?.map((lt, id) => (
                        <div key={id} id="loanissued" className="user__loans">
                            <h3>{lt.loanname}</h3>
                            <p>Status: {checkLoanIssued(lt.loanname) ? "Issued" : "Not Issued"}</p>

                            <button className="action__button" id={user._id} onClick={e => history.push({
                                pathname: `/auditloan/${e.target.id}`,
                                state: lt
                            })}>View/Audit loan</button>
                        </div>
                    ))}
                    {loanTypes.filter(ln => {
                        return !user.loans?.some(l => {
                            return l._id !== ln._id && ln.loanname === l.loanname
                        })
                    }).map((lt, id) => (
                        <div key={id} id="loannotissued" className="user__loans">
                            <h3>{lt.loanname}</h3>
                            <p>Status: Not Issued</p>
                            <button id={user._id} className="action__button" onClick={e => history.push({
                                pathname: `/issueloan/${e.target.id}`,
                                state: lt
                            })}>Issue Loan</button>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
}
