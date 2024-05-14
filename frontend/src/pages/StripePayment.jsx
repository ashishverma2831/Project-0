import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import {loadStripe} from '@stripe/stripe-js';

const StripePayment = () => {

  const handleStripePayment = async () => {

      // let res = await axios.post('http://localhost:3000/user/payment')
      // if(res && res.status === 200){
      //     window.location.href = response.data.url;
      //     console.log(res.data);
      //     console.log(res.data.url);
      // }


      // using stripe-js
      const stripe = await loadStripe('pk_test_51OqaSQSEAj666Bs35PSJzCLSY2Vz209T2tc2kMIJnb99BflxMoMQ5AuLGCyRrebJdHxoyhJszmqQCpu2bk36hkX000eFNTO283');
      const response = await fetch('http://localhost:3000/user/payment',{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          }
      });

      const session = await response.json();
      console.log(session);
      const result = await stripe.redirectToCheckout({
          sessionId:session.id
      });

      if(result.error){
          console.log(result.error.message);
      }
  }

  return (
    <>
      <Navbar />

      <h1 className='text-4xl text-center my-5 font-semibold'>Stripe</h1>

      <div className='text-center h-[400px] bg-red-300 flex justify-center items-center' >
        <button className='bg-red-500 px-5 py-2 text-xl font-normal rounded' onClick={handleStripePayment}>Payment</button>
      </div>

    </>
  )
}

export default StripePayment