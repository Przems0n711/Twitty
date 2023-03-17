import React from 'react';
import './Dashboard.scss';

const Dashboard = () => {
    const nameRef = React.createRef();
    const surnameRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    const _isIncorrectEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return false;
    
        return true;
    }

    const addEmailHandler = (e) => {
        e.preventDefault();
        
        const name = nameRef.current.value,
              surname = surnameRef.current.value,
              email = emailRef.current.value,
              password = passwordRef.current.value;

        if (name.length < 5 ||
            surname.length < 5 ||
            password.length < 5 ||
            _isIncorrectEmail(email)) {
            return;
        }

        const data = { name, surname, email, password };

        console.log(data);
    };

    return (
        <div className='Dashboard-container'>
            <h1>Welcome in mailer Dashboard</h1>

            <form>
                <input ref={nameRef} type='text' placeholder='Name' />
                <input ref={surnameRef} type='text' placeholder='Surname' />
                <input ref={emailRef} type='text' placeholder='Email' />
                <input ref={passwordRef} type='text' placeholder='Password' />
                <button onClick={addEmailHandler}>Dodaj</button>
            </form>
        </div>
    )
};

export default Dashboard;