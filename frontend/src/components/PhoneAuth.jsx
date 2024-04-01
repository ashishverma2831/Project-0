import React from 'react'
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { Link } from 'react-router-dom';

const PhoneAuth = () => {

    // const handlePhoneAuth = async () => {
    //     // console.log('Phone Auth');
    //     const auth = getAuth();
    //     window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
    //         'size': 'invisible',
    //         'callback': (response) => {
    //             // reCAPTCHA solved, allow signInWithPhoneNumber.
    //             onSignInSubmit();
    //         }
    //     });
    // }

    return (
        <>
            <Link to={'/phone-auth-page'}><button className='bg-green-500 text-white w-full rounded-lg py-2 hover:opacity-90 my-4'>  Sign in with the Phone number </button></Link>
        </>
    )
}

export default PhoneAuth