import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setadmins } from '../../redux/actions/AuthActions'

export default function AdminForm() {
    const dispatch = useDispatch()
    const { errors, register, handleSubmit } = useForm()
    const [errorMessage, setErrorMessage] = useState('')
    const login = async (values) => {
        try {
            //console.log(values)
            const { data } = await axios.post('/api/admin/loginadmin', values)
            if (data.success) {
                console.log(data.message)
                localStorage.setItem('admintoken', data.token)
                dispatch(setadmins())
            } else {
                setErrorMessage(data.message)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <div className="authform">
            <form className="form" onSubmit={handleSubmit(login)}>
                <div className="form__control">
                    <h1>Admin Login</h1>
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
                    <label htmlFor="adminkey" className="required">Admin key</label>
                    <input id="adminkey" name="adminkey" type="adminkey" ref={register({ required: true })} />
                    {errors.adminkey?.type === "required" && <small>Adminkey is required to login</small>}
                </div>
                <div className="form__control">
                    <button type="submit" className="action__button">Login</button>
                </div>
            </form>
        </div>
    )
}
