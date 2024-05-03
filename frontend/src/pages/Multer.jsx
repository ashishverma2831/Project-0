import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Navbar from '../components/Navbar';

const Multer = () => {
  // const multerForm = useFormik({
  //   initialValues: {
  //     image: ''
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   }
  // })

  const [files, setFiles] = useState([]);

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setFiles(file);
    
    const fd = new FormData();
    fd.append("myfile", file);
    fetch( "http://localhost:3000/multer/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };
  console.log(files);

  return (
    <>
      <Navbar />
      <form>
        <input type="file" name="avatar" multiple 
        onChange={uploadFile} 
        />
        <button type='submit' className='bg-red-700 px-4 py-2'
        >Submit</button>
      </form>
    </>
  )
}

export default Multer