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
    validationSchema: Yup.object().shape({
      image: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      console.log(values.image);
      const formData = new FormData();
      formData.append('image', values.image)
      fetch('http://localhost:3000/multer/uploadfile', {
        method: 'POST',
        body: formData
      }).then(res => {
        if (res.status === 200) {
          console.log('file uploaded');
        }
      })
    }
  })

  return (
    <>
      <Navbar />
      <form onSubmit={multerForm.handleSubmit}>
        <input type="file" name="image" id='image'
          onChange={multerForm.handleChange}
          values={multerForm.values.image}
        />
        <button type='submit' className='bg-red-700 px-4 py-2'
        >Submit</button>
      </form>
    </>
  )
}

export default Multer