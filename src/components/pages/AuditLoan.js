import { Fragment, useEffect, useState, useCallback } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'

export default function AuditLoan({ match, location }) {
    const history = useHistory()
    const [paidback, setPaidback] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null);
    const [loaninfo] = useState(location.state)
    const [guarentor, setGuarentor] = useState(location.guarentorid)
    const { register, handleSubmit, errors } = useForm()

    const auditLoan = async values => {
        try {
            const { data } = await axios.put(`/api/admin/audit/loan/${match.params.id}/${loaninfo._id}`, values)
            if (data.success) {
                history.push(`/user/${match.params.id}`)
            } else {
                setErrorMessage(data.message)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    const calculatePaidback = useCallback(() => {
        let totalaudited = 0;
        loaninfo?.audits?.map(aud => {
            totalaudited += aud.amount
            return 0;
        })
        setPaidback(totalaudited)
    }, [loaninfo])

    /*const getAudits = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/admin/get/audits/${match.params.id}/${loaninfo._id}`)
            if (data.success) {
                console.log(data)
                //setAudits(data.audits)
            } else {
                setErrorMessage(data.message)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }, [match.params.id, loaninfo._id])*/

    const getGrarentor = useCallback(async () => {
        try {
            if (loaninfo?.guarentorid !== 'n/a') {
                const { data } = await axios.get(`/api/admin/get/user/${loaninfo.guarentorid}`)
                if (data.success) {
                    setGuarentor(data.user.fullname)
                } else {
                    setErrorMessage(data.message)
                }
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }, [loaninfo])
    useEffect(() => {
        getGrarentor()
        calculatePaidback()
        //getAudits()
    }, [getGrarentor, calculatePaidback])

    return (
        <Fragment>
            <div className="mainbody__nav">
                <p className="mainbody__title">Audit loan {errorMessage ? <>| {errorMessage}</> : null}</p>
                <button className="action__button" onClick={() => history.push(`/user/${match.params.id}`)}>Back</button>
            </div>
            <div className="auditloan" style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
                <form className="form" onSubmit={handleSubmit(auditLoan)}>
                    <div className="form__control">
                        <h2>Loan : {loaninfo?.loanname}</h2>
                        {loaninfo?.loancomment ? <p>{loaninfo?.loancomment}</p> : null}
                        <p>Tk. {loaninfo?.loanamount}</p>
                        <p>Loan paidback: {paidback}</p>
                        <p>Installments: {loaninfo?.audits?.length}/{loaninfo?.installments}</p>
                        <p>Min Amount per installments: Tk. {loaninfo?.mininstallmentfee}</p>
                        <p>Guarentor: {loaninfo?.guarentorid === 'n/a' ? "n/a" : <Link to={`/user/${loaninfo?.guarentorid}`}>{guarentor}</Link>}</p>
                    </div>
                    {(paidback === loaninfo?.loanamount || paidback > loaninfo?.loanamount) ? (
                        <h1>Loan payback complete</h1>
                    ) : (

                            <Fragment>

                                <div className="form__control">
                                    <label className="required" htmlFor="amount">Loan payback amount</label>
                                    <input type="number" id="amount" name="amount" placeholder={`minimum Tk. ${loaninfo?.mininstallmentfee}`} ref={register({
                                        required: true,
                                        min: {
                                            value: loaninfo?.mininstallmentfee,
                                            message: `Not les than Tk. ${loaninfo?.mininstallmentfee}`
                                        }
                                    }
                                    )} />
                                    {errors.amount?.type === "required" && <small>Loan payback Amount is required</small>}
                                    {errors.amount?.type === "min" && <small>{errors.amount.message}</small>}
                                </div>
                                <div className="form__control">
                                    <button type="submit" className="action__button">Audit Loan</button>
                                </div>
                            </Fragment>
                        )
                    }
                </form >
                <div className="audits">
                    <h1>Audits</h1>
                    {loaninfo?.audits?.map((aud, id) => (
                        <div className="audits__card" key={id}>
                            <p className="card__id">{id + 1}{" )"}</p>
                            <div>
                                <h4>Amount {aud.amount}</h4>
                                <p>{new Date(aud.auditdate).toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </Fragment >
    )
}
