import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const StripePayment = () => {

  const stripePayment = async () => {
      let res = await axios.post('http://localhost:3000/user/payment')

      if(res && res.status === 200){
          alert('Payment Successful');
          console.log('Payment Successful');
          console.log(res);
      }
      else{
          alert('Payment Failed');
      }
  }

  return (
    <>
      <Navbar />

      <h1 className='text-4xl text-center my-5 font-semibold'>Stripe</h1>

      <div className='text-center h-[400px] bg-red-300 flex justify-center items-center' >
        <button className='bg-red-500 px-5 py-2 text-xl font-normal rounded' onClick={stripePayment}>Payment</button>
      </div>

    </>
  )
}

export default StripePayment