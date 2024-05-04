import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Navbar from '../components/Navbar';

const Multer = () => {
  
  // const multerForm = useFormik({
  //   initialValues: {
  //     avatar: '',
  //   },
  //   onSubmit: async (values) => {
  //     const formData = new FormData();
  //     formData.append('avatar', values.avatar);
  //     console.log(values);
  //     const res = await fetch('http://localhost:3000/multer/profile', {
  //       method: 'POST',
  //       body: formData(values.avatar),
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     })
  //     console.log(res);
  //     console.log(res.status);      
  //   }
  // })

  const [file, setFile] = useState(null);
  const upload = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    fetch('http://localhost:3000/multer/profile', {
      method: 'POST',
      body: formData
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  }

  return (
    <>
      <Navbar />
      <form>
        <input type="file"
        onChange={(e)=>{setFile(e.target.files[0])}}
        />
        <button type='submit' className='bg-red-700 px-4 py-2'
        onClick={upload}
        >Submit</button>
      </form>
    </>
  )
}

export default Multer