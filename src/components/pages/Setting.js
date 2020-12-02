import { Fragment, useState } from 'react'
import AdminSetting from '../settingpartials/AdminSetting'
import Loantype from '../settingpartials/Loantype'

export default function Setting() {
    const [errorMessage, setErrorMessage] = useState(null)
    const [settingMenu, setSettingMenu] = useState("loancat")


    return (
        <Fragment>
            <div className="mainbody__nav">
                <p className="mainbody__title">Settings {errorMessage ? <>| {errorMessage}</> : null}</p>
                {/*<button className="action__button" onClick={() => history.push('/users')}>All Users</button>*/}
            </div>
            <div className="setting">
                <div className="setting__nav">
                    <button className="action__button" value="admin" onClick={e => setSettingMenu(e.target.value)}>Admin Setting</button>
                    <button className="action__button" value="loancat" onClick={e => setSettingMenu(e.target.value)}>Loan Categories</button>
                </div>
                {settingMenu === "admin" && <AdminSetting setErrorMessage={err => setErrorMessage(err)} />}
                {settingMenu === "loancat" && <Loantype setErrorMessage={err => setErrorMessage(err)} />}
            </div>
        </Fragment>
    )
}
