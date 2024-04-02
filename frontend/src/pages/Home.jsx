import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />
      <Link to={'/email-verification'}>
        <button className='bg-blue-500 text-white w-full rounded-lg py-2 hover:opacity-90 my-2'>
          Email Verification
        </button>
      </Link>
    </>
  )
}

export default Home