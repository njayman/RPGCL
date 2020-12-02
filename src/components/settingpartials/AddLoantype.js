import axios from 'axios'
import { useForm } from 'react-hook-form'
export default function AddLoantype({ setToggleForm, getLoanTypes, setErrorMessage }) {
    const { handleSubmit, register, errors } = useForm()
    const addLoanType = async (values) => {
        try {
            console.log(values)
            const { data } = await axios.post('/api/admin/add/loantype', values)
            if (data.success) {
                getLoanTypes()
                setToggleForm(stf => !stf)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }
    return (
        <form className="loantypeform" onSubmit={handleSubmit(addLoanType)}>
            <div className="loantypeform__control">
                <label className="required" htmlFor="loanname">Loan category name</label>
                <input type="text" name="loanname" id="loanname" placeholder="ex. Car loan, House loan" ref={register({ required: true })} />
                {errors.loanname && <small>Loan name required</small>}
            </div>
            <div className="loantypeform__control">
                <label htmlFor="details">Loan category details</label>
                <input type="text" name="details" id="details" placeholder="optional" ref={register} />
            </div>
            <div className="loantypeform__control">
                <label className="required" htmlFor="maxloan">Maximum loan amount</label>
                <input type="number" name="maxloan" id="maxloan" placeholder="ex. 1000000, 1570000" ref={register({ required: true })} />
                {errors.maxloan && <small>Maximum loan amount required</small>}
            </div>
            <div className="loantypeform__control">
                <label className="required" htmlFor="installments">Maximum installments</label>
                <input type="number" name="installments" id="installments" placeholder="ex. 1, 2, 4." ref={register({ required: true })} />
                {errors.installments && <small>Maximum installments required</small>}
            </div>
            <div className="loantypeform__control">
                <label className="required" htmlFor="mininstallmentfee">Minumum amount per installment</label>
                <input type="number" name="mininstallmentfee" id="mininstallmentfee" placeholder="ex. 1000000, 1570000" ref={register({ required: true })} />
                {errors.mininstallmentfee && <small>Minimum installment fee required</small>}
            </div>
            <label htmlFor="guarentor">
                <input type="checkbox" name="guarentor" id="guarentor" ref={register} />
                {" "}<>Requires a guarentor?</>
            </label>
            <div className="loantypeform__control">
                <button type="submit" className="action__button">Submit</button>
            </div>
        </form>
    )
}
