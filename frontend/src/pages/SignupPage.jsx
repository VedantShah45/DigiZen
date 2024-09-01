import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Select,
    Input
} from '@chakra-ui/react'
import axios from 'axios'
import BASE_URL from '../utils/baseurl.js'
import useShowToast from '../hooks/useShowToast.jsx'
import { Link, useNavigate } from 'react-router-dom'

const SignupPage = () => {
    const [input, setInput] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        age: 0,
        role:'',
        gender: ''
    });
    const navigate = useNavigate();
    const showToast = useShowToast();
    const onSubmitHandler = async (event) => {
        try {
            console.log(input);
            
            event.preventDefault();
            const response = await axios.post(`${BASE_URL}/user/signup`, input, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });
            if (response.data.success) {
                showToast("Account created", response.data.message, "success");
                navigate('/login');
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
                    <h1 className='font-bold text-xl text-center text-teal-500 mb-4'>REGISTER NOW!</h1>
                    <div className='flex flex-col sm:flex-row items-center gap-2'>
                        <FormControl isRequired>
                            <FormLabel className='text-black'>Full Name</FormLabel>
                            <Input type='text' className='text-black' value={input.name} onChange={event => setInput({ ...input, name: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel className='text-black'>Email address</FormLabel>
                            <Input type='email' className='text-black' value={input.email} onChange={event => setInput({ ...input, email: event.target.value })} />
                        </FormControl>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-2'>
                        <FormControl isRequired>
                            <FormLabel className='text-black'>Username</FormLabel>
                            <Input type='text' className='text-black' value={input.username} onChange={event => setInput({ ...input, username: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel className='text-black'>Password</FormLabel>
                            <Input type='password' className='text-black' value={input.password} onChange={event => setInput({ ...input, password: event.target.value })} />
                        </FormControl>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-2'>
                        <FormControl isRequired>
                            <FormLabel className='text-black'>Phone No.</FormLabel>
                            <Input type='text' className='text-black' value={input.phone} onChange={event => setInput({ ...input, phone: event.target.value })} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel className='text-black'>Age</FormLabel>
                            <Input type='number' className='text-black' value={input.age} onChange={event => setInput({ ...input, age: event.target.value })} />
                        </FormControl>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-2'>
                        <FormControl isRequired>
                            <FormLabel className='text-black'>Role</FormLabel>
                            <Select placeholder='Select role' className='text-black' value={input.role} onChange={event => setInput({ ...input, role: event.target.value })}>
                                <option value='male' >Coach</option>
                                <option value='female' >Player</option>
                                <option value='other' >Other</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-2'>
                        <FormControl isRequired>
                            <FormLabel className='text-black'>Gender</FormLabel>
                            <Select placeholder='Select gender' className='text-black' value={input.gender} onChange={event => setInput({ ...input, gender: event.target.value })}>
                                <option value='male' >Male</option>
                                <option value='female' >Female</option>
                                <option value='non-binary' >Non-binary</option>
                                <option value='trans' >Trans</option>
                                <option value='other' >Other</option>
                            </Select>
                        </FormControl>
                    </div>
                    <button type='submit' className='bg-teal-500 hover:bg-teal-700 text-white p-2 rounded-lg w-full mt-2 font-bold'>REGISTER!</button>
                    <span className='text-black'>Already have an account ? <Link to='/login' className='text-blue-600'>Login</Link></span>
                </form>
            </div>
        </div>
    )
}

export default SignupPage
