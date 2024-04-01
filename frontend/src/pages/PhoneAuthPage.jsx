import { PhoneAuthProvider, RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import { auth } from '../firebase'

const PhoneAuthPage = () => {

    const [phone, setPhone] = useState("");
    const sendOTP = async () => {
        // const phoneProvider = new PhoneAuthProvider();
        // const verificationId = phoneProvider.verifyPhoneNumber(phone, window.recaptchaVerifier)
        // .then((verificationId) => {
        //     const code = window.prompt('Enter the OTP');
        //     const credential = PhoneAuthProvider.credential(verificationId, code);
        //     return signInWithCredential(credential);
        // });
        try {
            const auth = getAuth();
            const recaptcha = new RecaptchaVerifier(auth, 'recaptcha',{});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <PhoneInput country={'in'} value={phone} onChange={()=>setPhone("+"+phone)} placeholder='Enter your number' />
        <button className='bg-red-500 text-white w-48 rounded-lg py-2 hover:opacity-90 my-4'>  Send OTP </button>
        <br />
        <input type="text" placeholder='Enter OTP' className='w-48 rounded-lg py-2 my-4' />
        <br />
        <button className='bg-green-500 text-white w-48 rounded-lg py-2 hover:opacity-90 my-4'>  Verify OTP </button>
    </>
  )
}

export default PhoneAuthPage