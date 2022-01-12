import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';

// Login Page displayed at path: '/login'
function LoginPage () {
    return (
        <div>
            <LoginForm />
            <button>Log In</button>
            <Link to='/signup'>Don't have an account?</Link>
        </div>
    )
}

export default LoginPage;