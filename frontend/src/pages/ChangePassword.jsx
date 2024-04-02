import React from 'react'

const ChangePassword = () => {
  return (
    <>
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
        </h1>
        <form>
            <input type="password" id='password' placeholder='Enter new password' className='w-48 rounded-lg py-2 my-4' />
            <br />
            <input type="password" id='confirmPassword' placeholder='Confirm new password' className='w-48 rounded-lg py-2 my-4' />
            <br />
            <button type='submit' className='bg-green-500 text-white w-48 rounded-lg py-2 hover:opacity-90 my-4'>  Change Password </button>
        </form>
    </>
  )
}

export default ChangePassword