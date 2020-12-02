import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { setUsers } from '../../redux/actions/AuthActions'
function UserForm() {
    const dispatch = useDispatch()
    const { errors, register, setError, clearErrors, watch, handleSubmit } = useForm()
    const [newUser, setNewUser] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const regEmail = watch('email')


    const loginUser = async (values) => {
        try {
            //console.log(values)
            const { data } = await axios.post('/api/user/login', values)
            if (data.success) {
                console.log(data.message)
                localStorage.setItem('usertoken', data.token)
                dispatch(setUsers())
            } else {
                setErrorMessage(data.message)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    const registerUser = async (values) => {
        try {
            const { data } = await axios.post('/api/user/checkemail', {
                email: regEmail
            })
            if (data.success && data.found) {
                setError("email", {
                    type: "emailExists",
                    message: "An account with this email already exists"
                });
            } else if (data.success && !data.found) {
                clearErrors('email')
                //console.log(values)
                const { data } = await axios.post('/api/user/register', values)
                if (data.success) {
                    setNewUser(false)
                }
                console.log(data.message)

            } else {
                setErrorMessage(data.message)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    useEffect(() => {
        setErrorMessage('')
    }, [newUser])
    return (
        <div className="authform">
            {newUser ? (
                <form className="form" onSubmit={handleSubmit(registerUser)}>
                    <div className="form__control">
                        <h1>New user Registration</h1>
                        <p style={{ color: 'red' }}>{errorMessage}</p>
                    </div>
                    <div className="form__control">
                        <label htmlFor="fullname" className="required">Fullname</label>
                        <input id="fullname" name="fullname" type="text" ref={register({ required: true })} />
                        {errors.fullname?.type === "required" && <small>Fullname is required to register</small>}
                    </div>
                    <div className="form__control">
                        <label htmlFor="email" className="required">Email</label>
                        <input id="email" name="email" type="email" ref={register({ required: true })} />
                        {errors.email?.type === "required" && <small>Email is required to register</small>}
                        {errors.email?.type === "emailExists" && <small>An account with this email already exists</small>}
                    </div>
                    <div className="form__control">
                        <label htmlFor="phone" className="required">Phone</label>
                        <input id="phone" name="phone" type="tel" ref={register({ required: true })} />
                        {errors.phone?.type === "required" && <small>Phone no. is required to register</small>}
                    </div>

                    <div className="form__control">
                        <label htmlFor="position" className="required">Position</label>
                        <input id="position" name="position" type="text" ref={register({ required: true })} />
                        {errors.position?.type === "required" && <small>Position is required to register</small>}
                    </div>
                    <div className="form__control">
                        <label htmlFor="designation">Designation</label>
                        <input id="designation" name="designation" type="text" ref={register} />
                    </div>
                    <div className="form__control">
                        <label htmlFor="details" >Details</label>
                        <textarea id="details" name="details" ref={register} />
                    </div>

                    <div className="form__control">
                        <label htmlFor="password" className="required">Password</label>
                        <input id="password" name="password" type="password" ref={register({ required: true, minLength: 8 })} />
                        {errors.password?.type === "required" && <small>Your password is required to register</small>}
                        {errors.password?.type === "minLength" && <small>Your password mush have at least 8 character</small>}
                    </div>
                    <div className="form__control">
                        <label htmlFor="confirmpassword" className="required">Confirm password</label>
                        <input id="confirmpassword" name="confirmpassword" type="password" ref={register({
                            required: true,
                            minLength: 8,
                            validate: value => value === watch('password') || "password don't match"
                        })} />
                        {errors.confirmpassword?.type === "required" && <small>Type your password again to register</small>}
                        {errors.confirmpassword?.type === "minLength" && <small>Your password mush have at least 8 character</small>}
                        {errors.confirmpassword?.type === "validate" && <small>{errors.confirmpassword?.message}</small>}
                    </div>
                    <div className="form__control">
                        <button type="submit" className="action__button">Register</button>
                    </div>
                    <div className="form__control">
                        <button type="button" onClick={() => setNewUser(usr => !usr)} style={{ outline: "none", border: 'none', background: "#092579", color: '#fff', padding: "10px" }}>Login as an existing user</button>
                    </div>
                </form>
            ) : (
                    <form className="form" onSubmit={handleSubmit(loginUser)}>
                        <div className="form__control">
                            <h1>User Login</h1>
                            <p style={{ color: 'red' }}>{errorMessage}</p>
                        </div>
                        <div className="form__control">
                            <label htmlFor="email" className="required">Email</label>
                            <input id="email" name="email" type="email" ref={register({ required: true })} />
                            {errors.email?.type === "required" && <small>Email is required to login</small>}
                        </div>
                        <div className="form__control">
                            <label htmlFor="password" className="required">Password</label>
                            <input id="password" name="password" type="password" ref={register({ required: true })} />
                            {errors.password?.type === "required" && <small>Your password is required to login</small>}
                        </div>
                        <div className="form__control">
                            <button type="submit" className="action__button">Login</button>
                        </div>
                        <div className="form__control">
                            <button type="button" onClick={() => setNewUser(usr => !usr)} style={{ outline: "none", border: 'none', background: "#092579", color: '#fff', padding: "10px" }}>Register for an account</button>
                        </div>
                    </form>
                )}
        </div>
    )
}


export default UserForm;
