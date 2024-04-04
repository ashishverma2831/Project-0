import React from 'react'

const Multer = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        // formData.append('avatar', e.target.files[0])
        fetch('http://localhost:3000/profile', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    return (
        <>
            <form encType="multipart/form-data">
                <input type="file" name="avatar" />
                <button className='bg-red-700 px-4 py-2' onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Multer