import React from 'react'

const Multer = () => {
    return (
        <>
            <form action="/profile" method="post" enctype="multipart/form-data">
                <input type="file" name="avatar" />
            </form>
        </>
    )
}

export default Multer