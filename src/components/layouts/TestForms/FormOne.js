import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDataToForm } from '../../../redux/actions/FormAction';

export default function FormOne({ setStep }) {
    //const { user } = useSelector((state) => state.auth);
    const { errors, handleSubmit, register } = useForm()
    const dispatch = useDispatch()
    const nextStep = values => {
        dispatch(addDataToForm({ formone: values }))
        setStep(2)
    }

    return (
        <div className="requestloan">
            <h3>Request Loan</h3>
            <h1>গৃহ নির্মাণ/জমি-ফ্ল্যাট ক্রয় ঋণ/অগ্রিমের জন্য আবেদনপত্র</h1>
            <form onSubmit={handleSubmit(nextStep)}>
                <div className="form__control">
                    <label>আবেদনকারীর নাম (স্পষ্ট অক্ষরে)</label>
                    <input type="text" name="fullname" ref={register({
                        required: "আবেদনকারীর নাম লিখতে হবে"
                    })} />
                    {errors.fullname?.type === "required" && <small>{errors.fullname.message}</small>}
                </div>
                <div className="form__control">
                    <label>পদবি</label>
                    <input type="text" name="rank" ref={register({
                        required: "পদবি লিখতে হবে"
                    })} />
                    {errors.rank?.type === "required" && <small>{errors.rank.message}</small>}
                </div>

                <div className="form__control">
                    <label htmlFor="guardianname">পিতা/স্বামীর নাম</label>
                    <p>
                        <input style={{ width: "auto" }} type="radio" id="father" name="guardian" value="father" ref={register({
                            required: "পিতা/স্বামীর উল্লেখ করতে হবে"
                        })} />
                        <label htmlFor="father">পিতা</label>
                    </p>
                    <p>
                        <input style={{ width: "auto" }} type="radio" id="husband" name="guardian" value="husband" ref={register({
                            required: "পিতা/স্বামীর উল্লেখ করতে হবে"
                        })} />
                        <label htmlFor="husband">স্বামী</label>
                    </p>
                    {errors.guardian?.type === "required" && <small>{errors.guardian.message}</small>}
                    <input type="text" name="guardianname" ref={register({
                        required: "পিতা/স্বামীর নাম লিখতে হবে"
                    })} />
                    {errors.guardianname?.type === "required" && <small>{errors.guardianname.message}</small>}
                </div>
                <div className="form__control">
                    <label>জাতীয় পরিচয়পত্র</label>
                    <input type="text" name="nid" ref={register({
                        required: "জাতীয় পরিচয়পত্র লিখতে হবে"
                    })} />
                    {errors.nid?.type === "required" && <small>{errors.nid.message}</small>}
                </div>
                <div className="form__control">
                    <label>ই - টিআইএন নম্বর(যদি থাকে)</label>
                    <input type="text" name="tinno" ref={register()} />
                    {errors.tinno?.type === "required" && <small>{errors.tinno.message}</small>}
                </div>
                <div className="form__control">
                    <label>স্থায়ী ঠিকানা</label>
                    <input type="text" name="permanentaddress" ref={register({
                        required: "স্থায়ী ঠিকানা লিখতে হবে"
                    })} />
                    {errors.permanentaddress?.type === "required" && <small>{errors.permanentaddress.message}</small>}
                </div>
                <div className="form__control">
                    <label>বর্তমান বাসস্থানের ঠিকানা</label>
                    <input type="text" name="presentaddress" ref={register({
                        required: "বর্তমান বাসস্থানের ঠিকানা লিখতে হবে"
                    })} />
                    {errors.presentaddress?.type === "required" && <small>{errors.presentaddress.message}</small>}
                </div>
                <div className="form__control">
                    <label>মোবাইল</label>
                    <input type="text" name="phone" ref={register({
                        required: "মোবাইল লিখতে হবে"
                    })} />
                    {errors.phone?.type === "required" && <small>{errors.phone.message}</small>}
                </div>
                <div className="form__control">
                    <label>ইমেইল</label>
                    <input name="email" type="email" ref={register({
                        required: "ইমেইল লিখতে হবে"
                    })} />
                    {errors.email?.type === "required" && <small>{errors.email.message}</small>}
                </div>
                <div className="form__control">
                    <label>কর্মরত শাখা, উপবিভাগ ও বিভাগ</label>
                    <input type="text" name="branch" ref={register({
                        required: "কর্মরত শাখা, উপবিভাগ ও বিভাগ লিখতে হবে"
                    })} />
                    {errors.branch?.type === "required" && <small>{errors.branch.message}</small>}
                </div>
                <div className="form__control">
                    <label>চাকরিতে যোগদানের তারিখ</label>
                    <input type="date" name="joindate" ref={register({
                        required: "চাকরিতে যোগদানের তারিখ লিখতে হবে"
                    })} />
                    {errors.joindate?.type === "required" && <small>{errors.joindate.message}</small>}
                </div>
                <div className="form__control">
                    <label>চাকরির মেয়াদ</label>
                    <input type="text" name="jobduration" ref={register({
                        required: "চাকরির মেয়াদ লিখতে হবে"
                    })} />
                    {errors.jobduration?.type === "required" && <small>{errors.jobduration.message}</small>}
                </div>
                <div className="form__control">
                    <label>বর্তমান পদে যোগদান/পদন্নোতির তারিখ</label>
                    <input type="date" name="currentpositiondate" ref={register({
                        required: "বর্তমান পদে যোগদান/পদন্নোতির তারিখ লিখতে হবে"
                    })} />
                    {errors.currentpositiondate?.type === "required" && <small>{errors.currentpositiondate.message}</small>}
                </div>
                <div className="form__control">
                    <label>জন্ম তারিখ</label >
                    <input type="date" name="dateofbirth" ref={register({
                        required: "জন্ম তারিখ লিখতে হবে"
                    })} />
                    {errors.dateofbirth?.type === "required" && <small>{errors.dateofbirth.message}</small>}
                </div>
                <div className="form__control">
                    <label>পিআরএল - এ গমনের তারিখ</label>
                    <input type="date" name="prldate" ref={register({
                        required: "পিআরএল - এ গমনের তারিখ লিখতে হবে"
                    })} />
                    {errors.prldate?.type === "required" && <small>{errors.prldate.message}</small>}
                </div>
                <div className="form__control">
                    <label>জাতীয়তা</label>
                    <input type="text" name="nationality" ref={register({
                        required: "জাতীয়তা লিখতে হবে"
                    })} />
                    {errors.nationality?.type === "required" && <small>{errors.nationality.message}</small>}
                </div>
                <div className="form__control">
                    <label>বেতনস্কেল ও গ্রেড</label>
                    <input type="text" name="paygrade" ref={register({
                        required: "বেতনস্কেল ও গ্রেড লিখতে হবে"
                    })} />
                    {errors.paygrade?.type === "required" && <small>{errors.paygrade.message}</small>}
                </div>
                <div className="form__control">
                    <label>বর্তমান মূল বেতন</label>
                    <input type="text" name="presentmainfee" ref={register({
                        required: "বর্তমান মূল বেতন লিখতে হবে"
                    })} />
                    {errors.presentmainfee?.type === "required" && <small>{errors.presentmainfee.message}</small>}
                </div>
                <h3>যেখানে গৃহনির্মাণ করা হবে/জমি-ফ্ল্যাট ক্রয় করা হবে তার অবস্থান বর্ণনা:</h3>
                <div className="form__control">
                    <label>(ক) সিটি কর্পোরেশন/মহানগর</label>
                    <input type="text" name="citycorporation" ref={register({
                        required: "সিটি কর্পোরেশন/মহানগর লিখতে হবে"
                    })} />
                    {errors.citycorporation?.type === "required" && <small>{errors.citycorporation.message}</small>}
                </div>
                <div className="form__control">
                    <label>(খ) বিভাগীয়/জেলা সদর</label>
                    <input type="text" name="town" ref={register({
                        required: "বিভাগীয়/জেলা সদর লিখতে হবে"
                    })} />
                    {errors.town?.type === "required" && <small>{errors.town.message}</small>}
                </div>
                <div className="form__control">
                    <label>(গ) উপজেলা সদর</label>
                    <input type="text" name="subtown" ref={register({
                        required: "উপজেলা সদর লিখতে হবে"
                    })} />
                    {errors.subtown?.type === "required" && <small>{errors.subtown.message}</small>}
                </div>
                <div className="form__control">
                    <label>(ঘ) পৌরসভা</label>
                    <input type="text" name="municipality" ref={register({
                        required: "পৌরসভা লিখতে হবে"
                    })} />
                    {errors.municipality?.type === "required" && <small>{errors.municipality.message}</small>}
                </div>
                <div className="form__control">
                    <label>(ঙ) থানা</label>
                    <input type="text" name="thana" ref={register({
                        required: "থানা লিখতে হবে"
                    })} />
                    {errors.thana?.type === "required" && <small>{errors.thana.message}</small>}
                </div>
                <div className="form__control">
                    <label>(চ) মৌজা</label>
                    <input type="text" name="mouja" ref={register({
                        required: "মৌজা লিখতে হবে"
                    })} />
                    {errors.mouja?.type === "required" && <small>{errors.mouja.message}</small>}
                </div>
                <div className="form__control">
                    <label>(ছ) সিএস খতিয়ান নম্বর</label>
                    <input type="text" name="cskhatianno" ref={register({
                        required: "সিএস খতিয়ান নম্বর লিখতে হবে"
                    })} />
                    {errors.cskhatianno?.type === "required" && <small>{errors.cskhatianno.message}</small>}
                </div>
                <div className="form__control">
                    <label>(জ) সিএস প্লট নম্বর</label>
                    <input type="text" name="plotno" ref={register({
                        required: "সিএস প্লট নম্বর লিখতে হবে"
                    })} />
                    {errors.plotno?.type === "required" && <small>{errors.plotno.message}</small>}
                </div>
                <div className="form__control">
                    <label>(ঝ) এসএ খতিয়ান নম্বর</label>
                    <input type="text" name="sakhatianno" ref={register({
                        required: "এসএ খতিয়ান নম্বর লিখতে হবে"
                    })} />
                    {errors.sakhatianno?.type === "required" && <small>{errors.sakhatianno.message}</small>}
                </div>
                <div className="form__control">
                    <label>(ঞ) আরএস</label>
                    <input type="text" name="rs" ref={register({
                        required: "আরএস লিখতে হবে"
                    })} />
                    {errors.rs?.type === "required" && <small>{errors.rs.message}</small>}
                </div>
                <div className="form__control">
                    <label>(ট) সিটি জরিপ</label>
                    <textarea type="text" name="citysurvey" ref={register({
                        required: "সিটি জরিপ লিখতে হবে"
                    })} />
                    {errors.citysurvey?.type === "required" && <small>{errors.citysurvey.message}</small>}
                </div>

                <div className="form__control">
                    <label>(ঠ) চৌহদ্দি</label>
                    <input type="text" name="boundaries" ref={register({
                        required: "চৌহদ্দি লিখতে হবে"
                    })} />
                    {errors.boundaries?.type === "required" && <small>{errors.boundaries.message}</small>}
                </div>

                <div className="form__control">
                    <label>পূর্ব</label>
                    <input type="text" name="east" ref={register({
                        required: "পূর্ব লিখতে হবে"
                    })} />
                    {errors.east?.type === "required" && <small>{errors.east.message}</small>}
                </div>
                <div className="form__control">
                    <label>পশ্চিম</label>
                    <input type="text" name="west" ref={register({
                        required: "পশ্চিম লিখতে হবে"
                    })} />
                    {errors.west?.type === "required" && <small>{errors.west.message}</small>}
                </div>
                <div className="form__control">
                    <label>উত্তর</label>
                    <input type="text" name="north" ref={register({
                        required: "উত্তর লিখতে হবে"
                    })} />
                    {errors.north?.type === "required" && <small>{errors.north.message}</small>}
                </div>
                <div className="form__control">
                    <label>দক্ষিণ</label>
                    <input type="text" name="south" ref={register({
                        required: "দক্ষিণ লিখতে হবে"
                    })} />
                    {errors.south?.type === "required" && <small>{errors.south.message}</small>}
                </div>
                <div className="form__control">
                    <label>জমি/ফ্ল্যাটের ক্রয়মূল্য</label>
                    <input type="number" name="landprice" ref={register({
                        required: "জমি/ফ্ল্যাটের ক্রয়মূল্য লিখতে হবে"
                    })} />
                    {errors.landprice?.type === "required" && <small>{errors.landprice.message}</small>}
                </div>
                <div className="form__control">
                    <label>তারিখ (Acquire)</label>
                    <input type="date" name="landacquireprice" ref={register({
                        required: "তারিখ (Acquire) লিখতে হবে"
                    })} />
                    {errors.landacquireprice?.type === "required" && <small>{errors.landacquireprice.message}</small>}
                </div>
                <div className="form__control">
                    <label>জমি/ফ্ল্যাটের আয়তন ও বাজার দর</label>
                    <textarea type="text" name="landareaandmarketprice" ref={register({
                        required: "জমি/ফ্ল্যাটের আয়তন ও বাজার দর লিখতে হবে"
                    })} />
                    {errors.landareaandmarketprice?.type === "required" && <small>{errors.landareaandmarketprice.message}</small>}
                </div>
                <div className="form__control">
                    <label>জমি/ফ্ল্যাটটি কোন ব্যক্তিমালিকানাধীন বা প্রতিষ্ঠান থেকে ক্রয় করা হবে তার নাম ও ঠিকানা</label>
                    <textarea type="text" name="flatownerinfo" ref={register({
                        required: "জমি/ফ্ল্যাটটি কোন ব্যক্তিমালিকানাধীন বা প্রতিষ্ঠান থেকে ক্রয় করা হবে তার নাম ও ঠিকানা লিখতে হবে"
                    })} />
                    {errors.flatownerinfo?.type === "required" && <small>{errors.flatownerinfo.message}</small>}
                </div>
                <div className="form__control">
                    <label>কোম্পানি বা অন্য কোনো প্রতিষ্ঠান থেকে ইতঃপূর্বে গৃহনির্মাণ ঋণ গ্রহণ করলে বিস্তারিত তথ্য (ঋণের পরিমান, তারিখ  ও জমির অবস্থান)</label>
                    <textarea type="text" name="previousloaninfo" ref={register()} />
                </div>
                <div className="form__control">
                    <label>জমি/ফ্ল্যাট অন্য কোন প্রতিষ্ঠানের নিকট বন্ধক (Mortage)/ দায়বদ্ধ কি-না</label>
                    <textarea type="text" name="mortgage" ref={register({
                        required: "জমি/ফ্ল্যাট অন্য কোন প্রতিষ্ঠানের নিকট বন্ধক (Mortage)/ দায়বদ্ধ কি-না লিখতে হবে"
                    })} />
                    {errors.mortgage?.type === "required" && <small>{errors.mortgage.message}</small>}

                </div>
                <div className="form__control">
                    <label>গৃহের অনুমোদিত পরিকল্পনা (যদি থাকে) এবং গৃহটি যদি এক তলার অধিক হয় তবে গৃহটির সর্বমোট ভিত্তি এলাকা (Plinth area) এবং অন্তর্ভুক্ত আবৃত্ত এলাকার (Covered area) বিবরণ</label>
                    <textarea type="text" name="plinthandcoveredarea" ref={register} />
                </div>
                <div className="form__control">
                    <label>গৃহ নির্মাণ কাজ সম্পন্ন/ফ্ল্যাটে বসবাসের সম্ভাব্য তারিখ</label>
                    <textarea type="date" name="flatfinishdate" ref={register({
                        required: "গৃহ নির্মাণ কাজ সম্পন্ন/ফ্ল্যাটে বসবাসের সম্ভাব্য তারিখ লিখতে হবে"
                    })} />
                    {errors.flatfinishdate?.type === "required" && <small>{errors.flatfinishdate.message}</small>}
                </div>
                <div className="form__control">
                    <label>প্রয়োজনীয় অগ্রিম/ঋণের পরিমাণ</label>
                    <input type="number" name="loanamount" ref={register({
                        required: "প্রয়োজনীয় অগ্রিম/ঋণের পরিমাণ লিখতে হবে"
                    })} />
                    {errors.loanamount?.type === "required" && <small>{errors.loanamount.message}</small>}
                </div>
                <div className="form__control">
                    <h3>বিশেষ দ্রষ্টব্য:</h3>
                    <ol>
                        <li>তথ্যবলী পূরণ করে জমির মূল দলিল/সার্টিফাইড কপি, হালসন পর্যন্ত পরিশোধিত খাজনার রশিদ, মিউটেশন/খারিজ, নামজারী ইত্যাদি কাগজের সত্যায়িত ফটোকপি আবেদনপত্রের সাথে সংযুক্ত করতে হবে।</li>
                        <li>অসম্পূর্ণ অথবা ভুল/মিথ্যা তথ্যসংবলিত আবেদনপত্র গ্রহণযোগ্য হবে না।</li>
                        <li>আবেদনপত্রে উল্লিখিত খাত কোন অবস্থাতেই পরিবর্তনযোগ্য নয়।</li>
                    </ol>
                </div>
                <label htmlFor="agreement1"><input id="agreement1" name="agreement1" type="checkbox" ref={register({
                    required: "লিখতে হবে"
                })} />আমি এতদ্বারা ঘোষণা করছি যে, এই আবেদনপত্রে আমি যে সমস্ত তথ্য সরবরাহ/দাখিল করেছি, তা আমার জানা ও বিশ্বাসমতে সত্য এবং আমি কোনো কিছু গোপন করিনি। আমি আরও ঘোষণা করছি যে, আমি অগ্রিম গ্রহণ করে গৃহ নির্মাণ/জমি-ফ্ল্যাট ক্রয়ের জন্য ব্যয় করবো এবং যদি এই চুক্তিভংগ হয়, তাহলে এ বাবদ গৃহীত টাকার ওপর হিসাবকৃত সুদসহ সমূদয় অর্থ অবিলম্বে এক কিস্তিতে কর্তৃপক্ষকে ফেরৎ দেবো।</label>
                {errors.agreement1?.type === "required" && <small>{errors.agreement1.message}</small>}
                <div className="form__control">
                    <button className="action__button" type="submit">Next</button>
                </div>
            </form >
        </div>
    )
}
