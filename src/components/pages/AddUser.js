import { useState, useEffect, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
export default function AddUser() {
    const history = useHistory()
    const { handleSubmit, register, errors } = useForm()
    const [errorMessage, setErrorMessage] = useState(null)

    const addUser = async (values) => {
        try {
            const { data } = await axios.post("/api/admin/add/user", values)
            if (data.success) {
                history.push('/users')
            } else {
                setErrorMessage(data.message)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }
    useEffect(() => {
    }, [])
    return (
        <Fragment>
            <div className="mainbody__nav">
                <p className="mainbody__title">Add a user {errorMessage ? <>| {errorMessage}</> : null}</p>
                <button className="action__button" onClick={() => history.push('/users')}>Cancel</button>
            </div>
            <div className="form__container">
                <form className="form" onSubmit={handleSubmit(addUser)}>
                    <div className="form__section">
                        <div className="form__control">
                            <label className="required" htmlFor="fullname">Full name</label>
                            <input type="text" id="fullname" name="fullname" placeholder="ex. John Doe" ref={register({ required: true })} />
                            <small>{errors.fullname && "Full name is required"}</small>
                        </div>
                        <div className="form__control">
                            <label className="required" htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="ex. john@joe.com" ref={register({ required: true })} />
                            <small>{errors.email && "Email is required"}</small>
                        </div>
                        <div className="form__control">
                            <label className="required" htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" placeholder="ex. 017XXXXXXXX" ref={register({ required: true })} />
                            <small>{errors.phone && "Phone no. is required"}</small>
                        </div>
                        <div className="form__control">
                            <label htmlFor="details">Details</label>
                            <textarea type="text" id="details" name="details" rows={4} placeholder="optional field" ref={register} />
                        </div>
                        <div className="form__control">
                            <button className="action__button" type="submit">Add User</button>
                        </div>
                    </div>
                    <div className="form__section">
                        <div className="form__control">
                            <label className="required" htmlFor="position" >Position</label>
                            <input type="text" id="position" name="position" placeholder="ex. manager, executive" ref={register({ required: true })} />
                            <small>{errors.position && "Position is required"}</small>
                        </div>
                        <div className="form__control">
                            <label htmlFor="designation">Designation</label>
                            <input type="text" id="designation" name="designation" placeholder="ex. HR, Accounts" ref={register} />
                        </div>
                        {/*<label className="required" style={{ paddingBottom: "20px" }}>Eligible Loans</label>
                        <fieldset>
                            {loanType.map((lt, id) => (
                                <Fragment key={id}>
                                    <label>
                                        <input type="checkbox" id="eligible" name="eligible" value={lt.loanname} />{" "}{lt.loanname}
                                    </label>
                                </Fragment>
                            ))}
                            </fieldset>*/}
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
