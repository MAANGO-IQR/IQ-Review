// Form to log user in
// Two inputs: Email & password
import React from 'react';

function LoginForm () {
    return (
        <div className='flex-column'>
            <form autoComplete='false'>
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
            </form>

            <button>Log In</button>
        </div>
    )
}

export default LoginForm;