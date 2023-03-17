import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const navigate = useNavigate();

    const NotifyLoginError = toast.success('Page succesfully loaded!');

    const loginHandler = async (e) => {
        e.preventDefault();

        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        const response = await axios.post('/login', data)

        if (response.data.success) {
            sessionStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        }
    };

    return (
        <div className='Login-container'>
            <ToastContainer/>
            <h1>Twitty</h1>
            <form>
                <input ref={emailRef} type='text' placeholder='Email' />
                <input ref={passwordRef} type='password' placeholder='Password' />
                <button onClick={loginHandler}>Login</button>
            </form>
        </div>
    )
};

export default Login;