import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

function Paidback({ audits }) {
    const [paidback, setPaidback] = useState(null)
    const getLoanPaidback = useCallback(() => {
        let totalaudited = 0;
        audits?.map(aud => {
            totalaudited += aud.amount
            return 0;
        })
        setPaidback(totalaudited)
    }, [audits])
    useEffect(() => {
        getLoanPaidback()
    }, [getLoanPaidback])
    return <p>Loan paid back: {paidback}</p>
}
export default function ViewLoan({ match }) {
    const [loanInfo, setLoanInfo] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
    const getLoanInfo = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/user/get/loaninfo/${match.params.id}/${match.params.loanid}`)
            if (data.success) {
                //console.log(data.loaninfo)
                //setLoanInfo(data.loaninfo.find(loan => loan._id === match.params.loanid))
                setLoanInfo(data.loaninfo[1])

            } else {
                console.log(data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }, [match.params.id, match.params.loanid])

    useEffect(() => {
        getLoanInfo()
    }, [getLoanInfo])
    return (
        <div className="viewloan">
            {errorMessage}
            <h1>{loanInfo?.loanname}</h1>
            <p>Installments: {loanInfo?.audits?.length}/{loanInfo?.installments}</p>
            <p>Minimum installment fee: {loanInfo?.mininstallmentfee}</p>
            <Guarentor gid={loanInfo?.guarentorid} setErrorMessage={msg => setErrorMessage(msg)} />
            <p>Comments: (if any){loanInfo?.loancomment}</p>
            <Paidback audits={loanInfo?.audits} />
            <h2>Audits:</h2>
            {loanInfo?.audits?.map((audit, id) => (
                <fieldset key={id}>
                    <legend>Audit no.: {id + 1}</legend>
                    <h4>Audit amount: {audit.amount}</h4>
                    <p>Audit date: {new Date(audit.auditdate).toLocaleString()}</p>
                </fieldset>
            ))}
        </div>
    )
}

function Guarentor({ gid, setErrorMessage }) {
    const [guarentor, setGuarentor] = useState(null)
    const getGuarentor = useCallback(async (id) => {
        try {
            if (!id) {
                setGuarentor('')
            } else if (id === 'n/a') {
                setGuarentor('')
            } else {
                const { data } = await axios.get(`/api/user/getuser/${id}`)
                //console.log(data)
                if (data.success) {
                    setGuarentor(data?.user?.fullname)
                } else {
                    setErrorMessage(data.message)
                }
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }, [setErrorMessage])
    useEffect(() => {
        getGuarentor(gid)
    }, [getGuarentor, gid])
    return <p>Loan guarentor: {guarentor}</p>
}