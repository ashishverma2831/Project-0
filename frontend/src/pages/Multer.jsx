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


  const [file, setFile] = useState();
  // const [files, setFiles] = useState();

  const upload = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('http://localhost:3000/multer/profile', {
      method: 'POST',
      body: formData,
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      // }
    })
    if(res.status === 200) {
      console.log('success')
    }
    else {
      console.log('failed')
    }
  }

  // const uploadFiles = async (e) => {
  //   e.preventDefault()
  //   const formData = new FormData()
  //   let newArr = [];
  //   for (let i = 0; i < files.length; i++) {
  //     newArr.push(files[i]);
  //     console.log(files[i]);
  //   }    
  //   console.log(newArr);

  //   formData.append('photos', newArr);
  //   const res = await fetch('http://localhost:3000/multer/photos/upload', {
  //     method: 'POST',
  //     body: formData
  //   })
  //   if(res.status === 200) {
  //     console.log('success, files uploaded')
  //   }
  //   else {
  //     console.log('failed, files not uploaded')
  //   }
  // }

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

      {/* <form>
        <input type="file"
        multiple
        name='photos'
        onChange={(e)=>{setFiles(e.target.files)
        console.log(e.target.files)
        }}
        />
        <button type='submit' className='bg-red-700 px-4 py-2'
        onClick={uploadFiles}
        >Submit</button>
      </form> */}
    </>
  )
}

export default Multer