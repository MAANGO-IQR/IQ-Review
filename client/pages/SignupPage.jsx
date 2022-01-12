import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/signup/SignupForm';

// Signup Page displayed at path: '/signup'
function SignupPage() {
    return (
        <div className='width-400px ml-auto mr-auto mt-50px'>
            <h2>Sign Up</h2>
            <SignupForm />
            <Link to='/login'>Log In with Existing Account</Link>
        </div>
    )
}

export default SignupPage;