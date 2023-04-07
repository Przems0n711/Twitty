import React, { useRef } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const notifyLoginError = () => toast.error('Invalid Credentials');

    const loginHandler = async (e) => {
        e.preventDefault();

        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        try {
            const response = await axios.post('/api/admin/login', data);
            console.log(response.data);

            if (response.data.success) {
                sessionStorage.setItem('token', response.data.token);
                navigate('/explore');
            } else {
                notifyLoginError();
            }
        } catch (error) {
            console.log(error);
            notifyLoginError();
        }
    };

    return (
        <div className="Login-container">
            <ToastContainer theme="dark" position="bottom-right" />
            <h1>Twitty</h1>
            <form>
                <input ref={emailRef} type="text" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button onClick={loginHandler}>Login</button>
            </form>
        </div>
    );
};

export default Login;