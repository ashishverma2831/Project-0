import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const changePasswordSchema = Yup.object().shape({
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters long').max(12, 'Password must be at most 12 characters long').matches(/^[a-zA-Z0-9]{6,12}$/, 'Password must contain only letters and numbers'),
    confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const ChangePassword = () => {

    const changePasswordForm = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        onSubmit: async (values) => {
            console.log(values);

            const res = await fetch('http://localhost:3000/user/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            console.log(res.status);
            
        },
        validationSchema: changePasswordSchema
    })

  return (
    <>
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
        </h1>
        <form onSubmit={changePasswordForm.handleSubmit}>
            <input type="password" id='password' onChange={changePasswordForm.handleChange} value={changePasswordForm.values.password} placeholder='Enter new password' className='w-48 rounded-lg py-2 my-4' />
            <span className='text-red-700'>{changePasswordForm.touched && changePasswordForm.errors.password}</span>
            <br />
            <input type="password" id='confirmPassword'  onChange={changePasswordForm.handleChange} value={changePasswordForm.values.confirmPassword} placeholder='Confirm new password' className='w-48 rounded-lg py-2 my-4' />
            <span className='text-red-700'>{changePasswordForm.touched && changePasswordForm.errors.confirmPassword}</span>
            <br />
            <button type='submit' className='bg-green-500 text-white w-48 rounded-lg py-2 hover:opacity-90 my-4'>  Change Password </button>
        </form>
    </>
  )
}

export default ChangePassword