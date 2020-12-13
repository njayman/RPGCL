import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDataToForm } from '../../../redux/actions/FormAction';

export default function FormFive({ setStep }) {
    const { handleSubmit } = useForm()
    const dispatch = useDispatch()
    const nextStep = values => {
        dispatch(addDataToForm({ formfive: values }))
        setStep(5)
    }
    return (
        <div onSubmit={handleSubmit(nextStep)} className="requestloan">
            <h2>গ্যারান্টর হিসেবে গৃহনির্মান/জমি-ফ্ল্যাট ক্রয়ের জন্য</h2>
            <h3>জামিনদার কর্তৃক অঙ্গীকারনামা/মুচলেকা (বন্ড)</h3>
            <form className="formfive">
                <p className="inlinefields">অদ্য <input type="month" /> মাস/সন (দুই হাজার এবং <input type="text" /> খ্রিষ্টীয় সন) আমি নাম: <input type="text" />, পদবি:<input type="text" />, কর্মস্থল:<input type="text" />, বর্তমান ঠিকানা:<input type="text" />, স্থায়ী ঠিকানা:গ্রাম:<input type="text" />, ডাকঘর:<input type="text" />,থানা:<input type="text" />, উপজেলা :<input type="text" />, জেলা:<input type="text" />, এতদ্বারা রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানী লিমিটেড (আরপিজিসিএল) - কে নিঃশর্তভাবে (Unconditional) মুচলেকা প্রদানপূর্বক এই মর্মে অঙ্গীকার করছি যে, কোম্পানির পত্র নং <input type="text" />, তারিখ:<input type="date" />,অনুযায়ী আরপিজিসিএল-এ কর্মরত জনাব/বেগম <input type="text" /> পিতা: <input type="text" /> পদবি:<input type="text" /> কর্মস্থল:<input type="text" /> এর অনুকূলে গৃহ নির্মাণ/ জমি-ফ্ল্যাট ক্রোমের জন্য <input type="number" /> টাকা (<input type="text" />) ঋণ/অগ্রিম মঞ্জুর করা হয়। </p>
                <label><input type="checkbox" />আমি সুস্থ শরীর ও স্বজ্ঞানে ঋণগ্রহীতা এবং সাক্ষীগণের উপস্থিতিতে এ অঙ্গীকারনামা প্রদান করলাম।</label>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                    <fieldset>
                        <legend>গ্যারান্টরের নাম ও স্বাক্ষর</legend>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পদবি</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>ফোন নং</label>
                            <input type="tel" />
                        </div>
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>গ্যারান্টরের নাম ও স্বাক্ষর</legend>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পদবি</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>ফোন নং</label>
                            <input type="tel" />
                        </div>
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" />
                        </div>
                    </fieldset>
                </div>
                <fieldset style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                    <legend>সাক্ষীগণ</legend>
                    <fieldset>
                        <legend>1</legend>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পদবি</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>ফোন নং</label>
                            <input type="tel" />
                        </div>
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>2</legend>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" />
                        </div>

                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পদবি</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>ফোন নং</label>
                            <input type="tel" />
                        </div>
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" />
                        </div>
                    </fieldset>
                </fieldset>
            </form>
        </div>
    )
}
