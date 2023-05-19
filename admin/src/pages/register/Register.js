import React, { useRef } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const notifyRegistrationError = () =>
        toast.error('Failed to register. Please try again.');

    const handleRegistration = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post('/api/admin/register', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });

            if (data.success) {
                sessionStorage.setItem('token', data.token);
                navigate('/login');
            } else {
                notifyRegistrationError();
            }
        } catch (error) {
            console.log(error);
            notifyRegistrationError();
        }
    };

    return (
        <div className="Register-container">
            <ToastContainer theme="dark" position="bottom-right" />
            <h1>Twitty</h1>
            <form onSubmit={handleRegistration}>
                <input ref={emailRef} type="text" placeholder="Email" required />
                <input ref={passwordRef} type="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;