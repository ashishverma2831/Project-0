import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import OAuthLogin from '../components/OAuthLogin';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters long').max(12, 'Password must be at most 12 characters long').matches(/^[a-zA-Z0-9]{6,12}$/, 'Password must contain only letters and numbers')
})

const Login = () => {

    const navigate = useNavigate();
    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values,{setSubmitting,resetForm}) => {
            console.log(values)
            setSubmitting(true)

            const res = await fetch('http://localhost:3000/user/authenticate',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            console.log(res.status);
            setSubmitting(false);

            if(res.status === 200){
                enqueueSnackbar('User Logged in successfully', {
                    variant: 'success',
                });
                resetForm();
                navigate('/home');
            }
            else{
                enqueueSnackbar('Invalid Credentials', {
                    variant: 'error',
                });
            }
        },
        validationSchema: loginSchema
    })


    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    {/* <a
                        href="#"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <img
                            className="w-8 h-8 mr-2"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                            alt="logo"
                        />
                        Flowbite
                    </a> */}
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in 
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={loginForm.handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required=""
                                        onChange={loginForm.handleChange}
                                        value={loginForm.values.email}
                                    />
                                    <span className='text-sm text-red-500'>{loginForm.touched.email && loginForm.errors.email}</span>
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        onChange={loginForm.handleChange}
                                        value={loginForm.values.password}
                                    />
                                    <span className='text-sm text-red-500'>{loginForm.touched.password && loginForm.errors.password}</span>
                                </div>
                                {/* <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="text-gray-500 dark:text-gray-300"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div> */}
                                <button
                                    type="submit"
                                    className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign in
                                </button>
                                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?{" "}
                                    <a
                                        href="#"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Sign up
                                    </a>
                                </p> */}
                            </form>
                            <OAuthLogin />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login