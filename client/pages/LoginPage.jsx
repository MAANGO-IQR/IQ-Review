import React from 'react';
import LoginForm from '../components/login/LoginForm';

// Login Page at path: '/login'
function LoginPage () {
    return (
        <div>
            <LoginForm />
            <button>Log In</button>
        </div>
    )
}

export default LoginPage