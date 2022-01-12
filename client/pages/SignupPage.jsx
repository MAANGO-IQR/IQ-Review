import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/signup/SignupForm';

// Signup Page displayed at path: '/signup'
function SignupPage() {
    return (
        <div>
            <SignupForm />
            <button>Sign Up</button>
            <Link to='/login'>Log In with Existing Account</Link>
        </div>
    )
}

export default SignupPage;