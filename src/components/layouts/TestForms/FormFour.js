import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDataToForm } from '../../../redux/actions/FormAction';

export default function FormFour({ setStep }) {
    const { handleSubmit } = useForm()
    const dispatch = useDispatch()
    const nextStep = values => {
        dispatch(addDataToForm({ formfour: values }))
        setStep(5)
    }
    return (
        <div onSubmit={handleSubmit(nextStep)} className="requestloan">
            <form className="formfour">
                <h2>দ্বি-পাক্ষিক চুক্তি (Bi-Parties Agreement)</h2>
                <h3>(গৃহনির্মাণ/জমি-ফ্ল্যাট ক্রয়ের জন্য অর্থ গ্রহণকালে)</h3>

                <p className="inlinefields">অদ্য <input type="text" /> মাস <input type="text" /> সন <input type="text" /> (দুই হাজার এবং <input type="text" /> খ্রিষ্টীয় সন) জনাব/বেগম: <input type="text" />, পদবি: <input type="text" />, ঠিকানা: গ্রাম: <input type="text" />, ডাকঘর:<input type="text" />, থানা:<input type="text" />, উপজেলা:<input type="text" />, জেলা:<input type="text" /> (অতঃপর 'ঋণগ্রহীতা' বলা হবে) যার প্রকাশ (Expression) অনুযায়ী ঋণ গ্রহীতার বৈধ উত্তরসূরীগণ, প্রতিনিধি এবং স্বত্বের অংশীদার অন্তর্ভুক্ত হবে একপক্ষ এবং রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানী লিমিটেড (অতঃপর আরপিজিসিএল বলা হবে) যার প্রকাশ (Expression) বুঝবে এবং অন্তর্ভুক্ত হবে কোম্পানির স্বত্বের স্বার্থরক্ষাকারী অপরপক্ষ (Other Part)-এর মাধ্যমে - এর মধ্যে চুক্তিটি স্বাক্ষরিত হলো।</p>
                <p className="inlinefields">যেহুতু ঋণগ্রহীতা টাকা <input type="text" /> (কথায় <input type="text" />) দিয়ে রেজিস্ট্রেশন জেলা <input type="text" /> উপজেলা <input type="text" />, থানা <input type="text" /> এর অন্তর্গত একটি গৃহনির্মাণ/জমি-ফ্ল্যাট ক্রয়ে সম্মত হয়েছে, যার অবস্থান/সীমানা/চৌহদ্দি নিম্নরূপ:</p>
                <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', alignItems: "center", width: "100%" }}>
                    <ul>
                        <li>
                            <div className="form__control">
                                <label>উত্তর</label>
                                <textarea type="text" />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>দক্ষিণ</label>
                                <textarea type="text" />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>পূর্ব</label>
                                <textarea type="text" />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>পশ্চিম</label>
                                <textarea type="text" />
                            </div>
                        </li>
                    </ul>
                    <div>
                        <div className="form__control">
                            <label>ফ্ল্যাটের আয়তন</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>অবস্থান</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>যে প্রতিষ্ঠান থেকে ফ্লাট ক্রয় করা হয়েছে তার নাম ও ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                    </div>
                </div>
                <h3>ঋণগ্রহীতা কর্তৃক স্বাক্ষরিত হলো</h3>
                <div className="form__control">
                    <label>নাম:</label>
                    <input type="text" />
                </div>
                <fieldset style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <legend>নিম্নোক্ত সাক্ষীদের উপস্থিতিতে:</legend>
                    <fieldset>
                        <div className="form__control">
                            <label>নাম:</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম:</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পদবি:</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form__control">
                            <label>নাম:</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম:</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পদবি:</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                </fieldset>
                <h3>আরপিজিসিএল এর পক্ষে কোম্পানি সচিব কর্তৃক স্বাক্ষরিত হলো</h3>
                <div className="form__control">
                    <input type="text" />
                </div>
                <fieldset style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <legend>নিম্নোক্ত সাক্ষীদের উপস্থিতিতে:</legend>
                    <fieldset>
                        <div className="form__control">
                            <label>নাম:</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম:</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পদবি:</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form__control">
                            <label>নাম:</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম:</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পদবি:</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                </fieldset>
            </form>
        </div>
    )
}
