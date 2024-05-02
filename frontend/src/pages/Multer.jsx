import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Navbar from '../components/Navbar';

const Multer = () => {
  const multerForm = useFormik({
    initialValues: {
      image: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  })

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch('http://localhost:5000/multer/profile', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <form onSubmit={multerForm.handleSubmit}>
        <input type="file" name="image" id='image'
          onChange={multerForm.handleChange}
          values={multerForm.values.image}
        />
        <button type='submit' className='bg-red-700 px-4 py-2'
        onClick={uploadFile}
        >Submit</button>
      </form>
    </>
  )
}

export default Multer