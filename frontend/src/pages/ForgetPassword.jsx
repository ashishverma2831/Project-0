import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'
import ChangePassword from './ChangePassword';

const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required')
})

const ForgetPassword = () => {

    // const sendForgetPasswordEmail = async () => {
    //     const auth = getAuth();
    //     await sendPasswordResetEmail(auth,email)
    //     .then(() => {
    //         console.log('Email sent')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     });
    // }

    const forgetPasswordForm = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: async (values) => {
            console.log(values);
            console.log(values.email);
            const auth = getAuth();
            await sendPasswordResetEmail(auth, values.email)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.log(error)
            });
        },
        validationSchema: forgetPasswordSchema
    })

  return (
    <>
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Forget Password
        </h1>
        <form onSubmit={forgetPasswordForm.handleSubmit}>
        <input type="email" id='email' onChange={forgetPasswordForm.handleChange} value={forgetPasswordForm.values.email} placeholder='Enter your email' className='w-48 rounded-lg py-2 my-4' />
        <br />
            <span className='text-red-700'>{forgetPasswordForm.touched && forgetPasswordForm.errors.email}</span>
        <br />
        <button type='submit' className='bg-green-500 text-white w-48 rounded-lg py-2 hover:opacity-90 my-4'>  Send Verification Email </button>
        </form>
        {/* <ChangePassword /> */}
    </>
  )
}

export default ForgetPassword