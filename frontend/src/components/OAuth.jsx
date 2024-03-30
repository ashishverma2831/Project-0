import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../firebase';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {

    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider(); 
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            console.log(result);
            console.log(result.user.displayName);

            const res = await fetch('http://localhost:3000/user/add',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: result.user.email, password: 'password'})
            });

            console.log(res.status);
            const data = await res.json();

            if(res.status === 200){
                enqueueSnackbar('User registered successfully', {
                    variant: 'success',
                });
                navigate('/login');
            }
            else{
                enqueueSnackbar('Something went Wrong', {
                    variant: 'error',
                });
            }
        } catch (error) {
            console.log('Error in Google Signin', error);
        }
    }

  return (
    <>
        <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white w-full rounded-lg py-2 hover:opacity-90'>Connect with Google</button>
    </>
  )
}

export default OAuth