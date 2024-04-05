import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';

const multerSchema = Yup.object().shape({
    image: Yup.string().required('Required')
})

const Multer = () => {

    const [selFile, setSelFile] = useState('')
    const multerForm = useFormik({
        initialValues: {
            image: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: multerSchema
    })

    console.log(selFile);

    const uploadFile = (e) => {
        const file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:3000/multer/uploadfile", {
          method: "POST",
          body: fd,
        }).then((res) => {
          if (res.status === 200) {
            console.log("file uploaded");
          }
        });
      };

    return (
        <>
            <form  onSubmit={multerForm.handleSubmit}>
                <input type="file" name="image" id='image' onChange={uploadFile} />
                <button type='submit' className='bg-red-700 px-4 py-2' >Submit</button>
            </form>
        </>
    )
}

export default Multer