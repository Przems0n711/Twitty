import React, { useRef } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const notifyLoginError = () => toast.error('Invalid Credentials');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post('/api/admin/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });

            if (data.success) {
                sessionStorage.setItem('token', data.token);
                navigate('/explore');
            } else {
                notifyLoginError();
            }
        } catch (error) {
            console.log(error);
            notifyLoginError();
        }
    };

    const handleRegisterRedirect = (event) => {
        event.preventDefault();
        navigate('/register');
    };

    return (
        <div className="Login-container">
            <ToastContainer theme="dark" position="bottom-right" />
            <h1>Twitty</h1>
            <form onSubmit={handleLogin}>
                <input ref={emailRef} type="text" placeholder="Email" required />
                <input ref={passwordRef} type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleRegisterRedirect}>Register</button>
        </div>
    );
};

export default Login;