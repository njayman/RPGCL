import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDataToForm } from '../../../redux/actions/FormAction';

export default function FormTwo({ setStep }) {
    const { handleSubmit } = useForm()
    const dispatch = useDispatch()
    const nextStep = values => {
        dispatch(addDataToForm({ formtwo: values }))
        setStep(3)
    }
    return (
        <div className="requestloan">
            <form className="formtwo" onSubmit={handleSubmit(nextStep)}>
                <p className="inlinefields">মনোনীত ব্যক্তি/ব্যক্তিবর্গের ঘোষণা
                অদ্য <input type="month" /> মাস সন <input type="number" />( দুই  হাজার এবং <input type="text" /> খ্রিষ্টীয়  সন) আমি/আমরা <input type="text" /> রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানী লিমিটেড (আরপিজিসিএল)-এর কর্মকর্তা/কর্মচারী <input type="text" /> জনাব/বেগম <input type="text" /> -এর স্ত্রী/স্বামী-পুত্র-কন্যা/ভাই-বোন, এই মর্মে অঙ্গীকার করছি যে, আমার/আমাদের <input type="text" /> মৃত্যু হলে কোম্পানি হতে গৃহীত গৃহ নির্মাণ/ জমি-ফ্ল্যাট ক্রয়ের জন্য ঋণের অর্থ বা বকেয়া অর্থ <input type="number" /> টাকা <input type="text" /> তার (ঋণ গ্রহীতা) প্রভিডেন্ট ফান্ড/গ্র্যাচুইটি/পেনশন/গ্রুপ বীমা বা অন্যবিধ খাতে কোমপানি হতে আমি/আমাদের পাওনা অংশ হতে পরিশোধের নিমিত সমদ্বয়ের  জন্য আমার/আমাদের কোন আপত্তি থাকবেনা এবং আমি/আমরা এতদ্বারা নিঃশর্তভাবে আরপিজিসিএল-কে এই উদ্দেশ্যে ক্ষমতা অর্পণ করিলাম:</p>

                <fieldset style={{ display: "flex", flexDirection: "row" }}>
                    <legend>আমি/আমরা উপর্যুক্ত তারিখ ও সোনে নিম্নোক্ত সাক্ষীদের উপস্থিতিতে স্বাক্ষর করলাম:</legend>
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input type="tel" />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" />
                        </div >
                    </div>
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input type="tel" />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" />
                        </div >
                    </div >
                </fieldset>
                <fieldset style={{ display: "flex", flexDirection: "row" }}>
                    <legend>সাক্ষী</legend>
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input type="tel" />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" />
                        </div >
                    </div >
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input type="tel" />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" />
                        </div >
                    </div >
                </fieldset>
                <div className="form__control">
                    <button type="submit" className="action__button">Next</button>
                </div>
            </form >
        </div>
    )
}
