import { Fragment, useState, useEffect, useCallback } from 'react'
import AddLoantype from './AddLoantype'
import axios from 'axios'

export default function Loantype({ setErrorMessage }) {
    const [loanTypes, setLoanTypes] = useState([])
    const [toggleForm, setToggleForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const getLoanTypes = useCallback(async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('/api/admin/get/loantype')
            setLoanTypes(data.loantypes)
        } catch (error) {
            setErrorMessage(error.message)
        }
        setLoading(false)
    }, [setErrorMessage])
    useEffect(() => {
        getLoanTypes()
    }, [getLoanTypes])
    return (
        <Fragment>
            <fieldset>
                <legend>Loan category</legend>
                <button onClick={() => setToggleForm(tg => !tg)} className="action__button">{toggleForm ? "Cancel" : "Add loan category"}</button>
                {toggleForm ? <AddLoantype getLoanTypes={getLoanTypes} setErrorMessage={err => setErrorMessage(err)} setToggleForm={stf => setToggleForm(stf)} /> : null}
            </fieldset>
            <div className="loantype__cards">
                {loading ? (
                    <p>loading . . .</p>
                ) : (
                        <Fragment>
                            {
                                loanTypes.map((lt, id) => (
                                    <div className="loantype__card" key={id}>
                                        <h1>{lt.loanname}</h1>
                                        <p>{lt.details}</p>
                                        <p>Maximum loan: {lt.maxloan}</p>
                                        <p>Allowed installments: {lt.installments}</p>
                                        <p>Guarentor: {lt.guarentor ? "Required" : "Not required"}</p>
                                    </div>
                                ))
                            }
                        </Fragment>
                    )}
            </div>
        </Fragment>
    )
}
