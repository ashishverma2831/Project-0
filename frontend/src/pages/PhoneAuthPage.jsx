import { PhoneAuthProvider, RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import { auth } from '../firebase'

const PhoneAuthPage = () => {

    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [OTP, setOTP] = useState("")

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
            setUser(confirmation);
        } catch (error) {
            console.log(error);
        }
    }

    const verifyOTP = async () => {
        // user.confirm(OTP).then((result) => {
        //     console.log(result);
        // }).catch((error) => {    
        //     console.log(error);
        // });

        try {
            const data = await user.confirm(OTP);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <PhoneInput country={'in'} value={phone} onChange={(phone)=>setPhone("+"+phone)} placeholder='Enter your number' />
        <button onClick={sendOTP} className='bg-red-500 text-white w-48 rounded-lg py-2 hover:opacity-90 my-4'>  Send OTP </button>
        <div id='recaptcha'></div>
        <br />
        <input type="text" onChange={()=>{setOTP(e.target.value)}} placeholder='Enter OTP' className='w-48 rounded-lg py-2 my-4' />
        <br />
        <button onClick={verifyOTP} className='bg-green-500 text-white w-48 rounded-lg py-2 hover:opacity-90 my-4'>  Verify OTP </button>
    </>
  )
}

export default PhoneAuthPage