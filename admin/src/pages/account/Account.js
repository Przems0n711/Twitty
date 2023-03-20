import React from 'react';
import './Account.scss';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

const Account = () => {
    const usernameRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const navigate = useNavigate()

    const _isIncorrectEmail = (mail) => {
        // eslint-disable-next-line
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return false;
    
        return true;
    }

    const addEmailHandler = async (e) => {
        e.preventDefault();
        
        const username = usernameRef.current.value,
              email = emailRef.current.value,
              password = passwordRef.current.value;

        if (username.length < 5 ||
            password.length < 5 ||
            _isIncorrectEmail(email)) {
            return;
            }


        const data = { username, email, password };

        const response = await axios.post('/admin/login', data, {})

        if (response.status.success) {
            navigate('/account')
        }
        console.log(data);
    };

    return (
        <div className='Account-container'>
            <h1>Welcome to Twitty!</h1>

            <form>
                <input ref={usernameRef} type='text' placeholder='Username' />
                <input ref={emailRef} type='text' placeholder='Email' />
                <input ref={passwordRef} type='text' placeholder='Password' />
                <button onClick={addEmailHandler}>Add</button>
            </form>
        </div>
    )
};

export default Account;