import React from 'react'
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const PhoneAuth = () => {

    const handlePhoneAuth = async () => {
        // console.log('Phone Auth');
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            }
        });
    }

    return (
        <>
            <button onClick={handlePhoneAuth} className='bg-green-500 text-white w-full rounded-lg py-2 hover:opacity-90'>Sign in with the Phone number</button>
        </>
    )
}

export default PhoneAuth