import React from 'react'
import Navbar from '../components/Navbar'

const NodeCloudinary = () => {
  return (
    <>
        <Navbar />
        <form>
          <input type='file' name='image' className='m-4' />
          <br />
          <button type='submit' className='bg-blue-500 p-4 m-4'>Upload</button>
        </form>
    </>
  )
}

export default NodeCloudinary