import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { app } from '../firebase';
import { enqueueSnackbar } from 'notistack';

const GithubAuth = () => {

    const navigate = useNavigate();
    const handleGithubClick = async () => {
        try {
            const provider = new GithubAuthProvider();
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
            console.log('Error in Github Signin', error);
        }
    }

  return (
    <>
        <button type='button' onClick={handleGithubClick} className='bg-gray-700 text-white w-full rounded-lg py-2 hover:opacity-90'>Connect with Github</button>
    </>
  )
}

export default GithubAuth