import React, { useState, Fragment } from 'react'
import FormFive from '../layouts/TestForms/FormFive'
import FormFour from '../layouts/TestForms/FormFour'
import FormOne from '../layouts/TestForms/FormOne'
import FormThree from '../layouts/TestForms/FormThree'
import FormTwo from '../layouts/TestForms/FormTwo'

export default function TestHomeLoan() {
    const [step, setStep] = useState(5)
    return (
        <Fragment>
            <div class="formnav">
                <button className="action__button" value={1} onClick={e => setStep(Number(e.target.value))}>1</button>
                <button className="action__button" value={2} onClick={e => setStep(Number(e.target.value))}>2</button>
                <button className="action__button" value={3} onClick={e => setStep(Number(e.target.value))}>3</button>
                <button className="action__button" value={4} onClick={e => setStep(Number(e.target.value))}>4</button>
                <button className="action__button" value={5} onClick={e => setStep(Number(e.target.value))}>5</button>
            </div>
            {step === 1 &&
                <FormOne setStep={s => setStep(s)} />
            }
            {step === 2 &&
                <FormTwo setStep={s => setStep(s)} />
            }
            {step === 3 &&
                < FormThree setStep={s => setStep(s)} />
            }
            {step === 4 &&
                <FormFour setStep={s => setStep(s)} />
            }
            {step === 5 &&
                <FormFive setStep={s => setStep(s)} />
            }
        </Fragment >
    )
}
