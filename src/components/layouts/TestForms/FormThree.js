import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDataToForm } from '../../../redux/actions/FormAction';

export default function FormThree({ setStep }) {
    const { handleSubmit } = useForm()
    const dispatch = useDispatch()
    const nextStep = values => {
        dispatch(addDataToForm({ formthree: values }))
        setStep(4)
    }
    return (
        <div className="requestloan">
            <form onSubmit={handleSubmit(nextStep)} className="formthree">
                <h2>পক্ষত্রয়ের মধ্যে (between)</h2>

                <h3>প্রথম পক্ষ</h3>
                <p className="inlinefields">জনাব/বেগম <input type="text" /> পিতা/স্বামী: <input type="text" /> জাতীয়তা: বাংলাদেশী, ধর্ম: <input type="text" /> অধিবাসী/স্থায়ী বাসিন্দা <input type="text" /> থানাধীন জেলা:<input type="text" />, উপজেলা:<input type="text" /> বর্তমান ঠিকানা / প্রতিষ্ঠান <input type="text" /> (অতঃপর বলা হবে বিক্রেতা, যার প্রকাশ (এক্সপ্রেশন) বোঝাবে এবং অন্তর্ভুক্তি হবে তার উত্তরসূরীগণ, বৈধ প্রতিনিধিগণ এবং স্বত্বের অংশীদার) একপক্ষ (One Part)।</p>
                <h3>দ্বিতীয় পক্ষ</h3>
                <p className="inlinefields">জনাব/বেগম <input type="text" /> পিতা/স্বামী: <input type="text" /> জাতীয়তা: বাংলাদেশী, ধর্ম: <input type="text" /> অধিবাসী/স্থায়ী বাসিন্দা <input type="text" /> থানাধীন জেলা:<input type="text" />, উপজেলা:<input type="text" /> বর্তমান ঠিকানা <input type="text" /> পদবি:<input type="text" />, আরপিজিসিএল (অতঃপর বলা হবে 'ক্রেতা', যার প্রকাশ (Expression) বোঝাবে এবং অন্তর্ভুক্তি হবে তার মনোনীত ব্যক্তি (Nominee),উত্তরসূরীগণ, বৈধ প্রতিনিধিগণ এবং স্বত্বের অংশীদার) একপক্ষ (Second Part)।</p>
                <h3>তৃতীয় পক্ষ</h3>
                <p>রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানী লিমিটেড (আরপিজিসিএল)-এর পক্ষ প্রতিনিধিত্ব করবেন কোম্পানি সচিব (অতঃপর বলা হবে 'আরপিজিসিএল' যার প্রকাশ (Expression) বোঝাবে এবং অন্তর্ভুক্তি হবে বৈধ প্রতিনিধি) - তৃতীয় পক্ষ (Third Part)।</p>
                <p className="inlinefields">যেহেতু, উল্লেখিত ভেন্ডার (বিক্রেতা) জমি/ফ্ল্যাটের একক এবং সম্পূর্ণ মালিক এবং যা তার ভোগদখলে আছে, যার আয়তন <input type="text" /> বর্গফুট, অথবা <input type="text" /> কাঠা/শতাংশ, দাগ নং <input type="text" />, মৌজা: <input type="text" /> থানাধীন <input type="text" /> জেলা,<input type="text" /> উপজেলার অন্তর্ভুক্ত এবং যার বর্ণনা নিম্নোক্ত তালিকায় (Schedule) উল্লিখিত। </p>
                <p>এবং যেহেতু, উল্লেখিত ভেন্ডার (বিক্রেতা) জমি/ফ্ল্যাটটি বিক্রয় করতে ইচ্ছুক এবং 'ক্রেতা' উল্লেখিত জমি/ফ্ল্যাটটি ক্রয় করতে ইচ্ছুক (অতঃপর 'হস্তান্তর জমি/ফ্ল্যাট' (Demised Plot) বলে উল্লেখ করা হবে) যা নিম্নোক্ত তালিকাতে বর্ণিত হয়েছে এবং যা সম্পূর্ণভাবে সকল দায়ভার অভিযোগমুক্ত।</p>
                <fieldset style={{ display: 'flex', flexDirection: "row" }}>
                    <legend>সম্পত্তির তালিকা (Schedule)</legend>
                    <ul style={{ margin: '20px' }}>
                        <li>
                            <div className="form__control">
                                <label>জেলা/বিভাগ</label>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>তৌজি নং</label>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>জে. এল.</label>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>প্লট নং</label>
                                <input type="text" />
                            </div>
                        </li>
                    </ul>
                    <ul style={{ margin: '20px' }}>
                        <li>
                            <div className="form__control">
                                <label>উপজেলা</label>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>এস. এ খতিয়ান</label>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>মৌজা.</label>
                                <input type="text" />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>পরিমাণ</label>
                                <input type="text" />
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>
                    <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', width: '100%' }}>
                        <fieldset>
                            <legend>বিক্রেতার স্বাক্ষর/প্রথম পক্ষ</legend>
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
                        </fieldset>
                        <fieldset>
                            <legend>রেতার স্বাক্ষর/দ্বিতীয় পক্ষ</legend>
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
                        </fieldset>
                        <fieldset>
                            <legend>আরপিজিসিএল-এর পক্ষে স্বাক্ষর/তৃতীয় পক্ষ</legend>
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
                        </fieldset>
                    </div>
                    <fieldset style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', width: "100%" }}>
                        <legend>সাক্ষীগণ:</legend>
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
                </div>
            </form>
        </div>
    )
}
