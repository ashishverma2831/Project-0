import { getAuth, sendEmailVerification } from 'firebase/auth';
import { enqueueSnackbar } from 'notistack';
import React from 'react';                     

const EmailVerification = () => {

    const verifyEmail = async () => {
        const auth = getAuth();
        console.log(auth.currentUser);
        await sendEmailVerification(auth.currentUser)
        .then((result) => {
            console.log(result);
            enqueueSnackbar('Email Verification Link Sent', { variant: 'success' });
        }).catch((err) => {
            console.log(err);
        });
    }

  return (
    <>
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Email Verification
        </h1>
        {/* <input type="email" placeholder='Enter yout email' className='w-48 rounded-lg py-2 my-4' /> */}
        <br />
        <button onClick={verifyEmail} className='bg-green-500 text-white w-48 rounded-lg py-2 hover:opacity-90 my-4'>  Send Verification Email </button>
    </>
  )
}

export default EmailVerification