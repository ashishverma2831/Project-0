import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Navbar from '../components/Navbar';

const Multer = () => {
  

  return (
    <>
      <Navbar />
      <form action='/profile'>
        <input type="file" name="avatar"
        />
        <button type='submit' className='bg-red-700 px-4 py-2'
        >Submit</button>
      </form>
    </>
  )
}

export default Multer