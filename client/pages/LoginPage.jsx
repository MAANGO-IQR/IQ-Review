import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';

// Login Page displayed at path: '/login'
function LoginPage () {
    return (
        <div className='width-400px ml-auto mr-auto mt-50px'>
            <h2>Log In</h2>
            <LoginForm />
            <Link to='/signup'>Don't have an account?</Link>
        </div>
    )
}

export default LoginPage;