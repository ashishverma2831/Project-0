import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../firebase';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const OAuthLogin = () => {

    const navigate = useNavigate();
    const handleGoogleClickLogin = async () => {
        try {
            const provider = new GoogleAuthProvider(); 
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            console.log(result);
            console.log(result.user.displayName);

            const res = await fetch('http://localhost:3000/user/authenticate',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: result.user.email, password: 'password'})
            });

            console.log(res.status);
            const data = await res.json();

            if(res.status === 200){
                enqueueSnackbar('User Google Logged in successfully', {
                    variant: 'success',
                });
                navigate('/home');
            }
            else{
                enqueueSnackbar('Invalid Credentials', {
                    variant: 'error',
                });
            }
        } catch (error) {
            console.log('Error in Google Signin', error);
        }
    }

  return (
    <>
        <button type='button' onClick={handleGoogleClickLogin} className='bg-red-700 text-white w-full rounded-lg py-2 hover:opacity-90'>Continue with Google</button>
    </>
  )
}

export default OAuthLogin