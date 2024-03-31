import React from 'react'

const PhoneAuth = () => {

    const handlePhoneAuth = async () => {
        // console.log('Phone Auth');
        
    }

  return (
    <>
        <button onClick={handlePhoneAuth} className='bg-green-500 text-white w-full rounded-lg py-2 hover:opacity-90'>Sign in with the Phone number</button>
    </>
  )
}

export default PhoneAuth