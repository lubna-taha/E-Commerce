import React, { useContext, useState } from 'react';
import styles from './Login.module.css';
import * as yup from 'yup';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { tokenContext } from '../../Context/Token';
import { useFormik } from 'formik';
import { Helmet } from 'react-helmet';


const Login = () => {

    let navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    let { token, setToken } = useContext(tokenContext)

    async function callLogin(reqBody) {

        setErrorMessage('')
        setIsLoading(true)

        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, reqBody)
            .catch(err => {
                setIsLoading(false)
                setErrorMessage(err.response.data.message)
            })

        if (data.message == 'success') {
            localStorage.setItem('userToken', data.token)
            setToken(data.token)
            console.log(token, 'token');
            navigate('../home')
        }
    };

    const validationSchema = yup.object({
        email: yup.string().email('email not valid').required('email is required'),
        password: yup.string().matches(/^[A-z][a-z0-9]{3,8}$/, "invalid password").required('password is required'),
    });



    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: callLogin

    });



    return (
        <>

            <Helmet>
                <title>Login page</title>
            </Helmet>

            <div className="w-50 mx-auto my-5">
                <h2 className='mb-3'>Login Now: </h2>
                {errorMessage ? <div className="alert alert-danger">{errorMessage} </div> : null}

                <form onSubmit={loginForm.handleSubmit}>

                    <div className="form-group mb-2">
                        <label htmlFor="Email" className=' mb-1'>Email</label>
                        <input
                            type="email"
                            id='email'
                            className='form-control'
                            value={loginForm.values.email}
                            onChange={loginForm.handleChange}
                            onBlur={loginForm.handleBlur}
                        />
                        {loginForm.errors.name && loginForm.touched.email ? (
                            <div className="alert alert-danger">
                                {""}
                                {loginForm.errors.email}
                            </div>
                        )
                            : null}
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="password" className=' mb-1'>Password</label>
                        <input
                            type="password"
                            id='password'
                            className='form-control'
                            value={loginForm.values.password}
                            onChange={loginForm.handleChange}
                            onBlur={loginForm.handleBlur}
                        />
                        {loginForm.errors.name && loginForm.touched.password ? (
                            <div className="alert alert-danger">
                                {""}
                                {loginForm.errors.password}
                            </div>
                        )
                            : null}
                    </div>


                    <button type="submit" className='btn bg-main text-white d-block ms-auto'>
                        {isLoading ? <i className='fa fa-spin fa-spinner'></i> : 'Login'}

                    </button>
                </form>
            </div>
        </>
    )

    return (
        <>


        </>
    )
}
export default Login