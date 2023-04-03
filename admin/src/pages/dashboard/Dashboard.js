import React, { useState, useRef, useEffect } from 'react';
import './Dashboard.scss';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const isIncorrectEmail = (mail) => {
        return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    };

    const getUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            if (response.data.success) {
                setUsers(response.data.users);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const notifyAddUserSuccess = () => toast.success('User Added');
    const notifyAddUserError = () => toast.error('User Not Added');

    const addUser = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const surname = surnameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (name.length < 5 || surname.length < 5 || password.length < 5 || isIncorrectEmail(email)) {
            console.log('Incorrect data');
            return;
        }

        const data = { name, surname, email, password };

        try {
            const response = await axios.post('/api/users', data, {});
            if (response.data.success) {
                getUsers();
                notifyAddUserSuccess();
            }
        } catch (error) {
            console.log(error);
            notifyAddUserError();
        }
    };

    const removeUser = async (id) => {
        try {
            const response = await axios.post('/api/users/remove', { id });
            if (response.data.success) {
                getUsers();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="Dashboard-container">
            <ToastContainer theme="dark" position="bottom-right" />
            <h1>Welcome to Twitty!</h1>
            <form>
                <input ref={nameRef} type="text" placeholder="Name" />
                <input ref={surnameRef} type="text" placeholder="Surname" />
                <input ref={emailRef} type="text" placeholder="Email" />
                <input ref={passwordRef} type="text" placeholder="Password" />
                <button onClick={addUser}>Add User</button>
            </form>
            <div className="Dashboard-users">
                {users.map((user) => (
                    <div key={user.id} className="Dashboard-user">
                        <p>
                            {user.name} {user.surname}
                        </p>
                        <p>{user.email}</p>
                        <button onClick={() => removeUser(user.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;