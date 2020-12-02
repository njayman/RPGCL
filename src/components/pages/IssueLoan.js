import { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
export default function IssueLoan({ location, match }) {
    const history = useHistory()
    const [query, setQuery] = useState('')
    const [users, setUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState(null);
    const [loaninfo] = useState(location.state)
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            loanname: loaninfo.loanname,
            installments: loaninfo.installments,
            mininstallmentfee: loaninfo.mininstallmentfee
        }
    })
    //console.log(location.state)
    const getUsers = async () => {
        try {
            const { data } = await axios.get('/api/admin/get/users')
            setUsers(data.users)
        } catch (error) {
            setErrorMessage(error.message)
        }
    }
    const issueLoan = async (values) => {
        try {
            const { data } = await axios.put(`/api/admin/add/loan/${match.params.id}`, values)
            if (data.success) {
                history.push(`/user/${match.params.id}`)
            } else {
                setErrorMessage(data.message)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Fragment>
            <div className="mainbody__nav">
                <p className="mainbody__title">Issue loan {errorMessage ? <>| {errorMessage}</> : null}</p>
                <button className="action__button" onClick={() => history.push(`/user/${match.params.id}`)}>Back</button>
            </div>
            <div className="issueloan">
                <form className="form" onSubmit={handleSubmit(issueLoan)}>
                    <div className="form__control">
                        <input style={{ opacity: 0, cursor: 'default', height: "1px", padding: "1px", margin: "1px" }} value={loaninfo.loanname} readOnly name="loanname" type="text" ref={register} />
                        <input style={{ opacity: 0, cursor: 'default', height: "1px", padding: "1px", margin: "1px" }} value={loaninfo.installments} readOnly name="installments" type="number" ref={register} />
                        <input style={{ opacity: 0, cursor: 'default', height: "1px", padding: "1px", margin: "1px" }} value={loaninfo.mininstallmentfee} readOnly name="mininstallmentfee" type="number" ref={register} />
                        <h2>Loan : {loaninfo.loanname}</h2>
                        {loaninfo.details ? <p>{loaninfo.details}</p> : null}
                        <p>Tk. {loaninfo.maxloan}</p>
                        <p>Total installments allowed: {loaninfo.installments}</p>
                        <p>Min Amount per installments: Tk. {loaninfo.mininstallmentfee}</p>
                    </div>
                    <div className="form__control">
                        <label className="required" htmlFor="loanamount">Loan Amount</label>
                        <input type="number" id="loanamount" name="loanamount" placeholder={`maximum ${loaninfo.maxloan}`} ref={register({
                            required: true,
                            max: {
                                value: loaninfo.maxloan,
                                message: `Not more than Tk. ${loaninfo.maxloan}`
                            },
                            min: {
                                value: 1000,
                                message: 'Not les than Tk. 1000'
                            }
                        }
                        )} />
                        {errors.loanamount?.type === "required" && <small>Loan  Amount is required</small>}
                        {errors.loanamount?.type === "min" && <small>{errors.loanamount.message}</small>}
                        {errors.loanamount?.type === "max" && <small>{errors.loanamount.message}</small>}
                    </div>
                    {loaninfo.guarentor ? (
                        <div className="form__control">
                            <label className="required" htmlFor="guarentorid">Loan guarentor</label>
                            <input type="search" onChange={e => setQuery(e.target.value)} />
                            <select id="guarentorid" name="guarentorid" ref={register({ required: true })}>
                                {users.filter(user => {
                                    return user.fullname.toLowerCase().includes(query.toLowerCase()) || !query;
                                }).map((u, uid) => (
                                    <option key={uid} label={u.fullname} value={u._id}></option>
                                ))}
                            </select>
                            {errors.guarentorid && <small>Loan  guarentor is required</small>}
                        </div>
                    ) : null}
                    {/*<div className="form__control">
                        <label className="required" htmlFor="loanamount">Loan Amount</label>
                        <input type="file" id="loanamount" name="loanamount" placeholder="ex. 12000000" ref={register({ required: true })} />
                        <small>{errors.loanamount && "Loan  Amount is required"}</small>
                    </div>*/}
                    <div className="form__control">
                        <label htmlFor="loancomment">Loan Comment</label>
                        <textarea rows="4" type="text" id="loancomment" name="loancomment" placeholder="ex. extra details about this loan" ref={register} />
                    </div>
                    <div className="form__control">
                        <button type="submit" className="action__button">Issue Loan</button>
                    </div>
                </form>
            </div>
        </Fragment >
    )
}
