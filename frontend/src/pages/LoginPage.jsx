import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'
import axios from 'axios'
import BASE_URL from '../utils/baseurl.js'
import useShowToast from '../hooks/useShowToast.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/authSlice.js'

const LoginPage = () => {
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const showToast = useShowToast();
    const dispatch = useDispatch();
    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(`${BASE_URL}/user/login`, input, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });
            if (response.data.success) {
                showToast("Logged in", response.data.message, "success");
                dispatch(setUser(response.data.user));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            showToast("Error", error.response.data.message, "error");
        }
    }
    return (
        <div className='min-h-screen bg-teal-300 flex items-center justify-center'>
            <div className='w-[80%] sm:w-[60%] md:[50%] lg:[40%] mx-auto my-4 px-2 py-4 rounded-lg shadow-lg bg-white flex items-center justify-center'>
                <form className='w-[100%] px-2' onSubmit={onSubmitHandler}>
                    <h1 className='font-bold text-xl text-center text-teal-500 mb-4'>LOGIN NOW!</h1>
                    <div className='flex flex-col items-center gap-2'>
                        <FormControl isRequired>
                            <FormLabel className='text-black'>Email address</FormLabel>
                            <Input type='email' className='text-black' value={input.email} onChange={event => setInput({ ...input, email: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel className='text-black'>Password</FormLabel>
                            <Input type='password' className='text-black' value={input.password} onChange={event => setInput({ ...input, password: event.target.value })} />
                        </FormControl>
                    </div>
                    <button type='submit' className='bg-teal-500 hover:bg-teal-700 text-white p-2 rounded-lg w-full mt-2 font-bold'>LOGIN!</button>
                    <span className='text-black'>Don't have an account ? <Link to='/signup' className='text-blue-600'>Sign up</Link></span>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
