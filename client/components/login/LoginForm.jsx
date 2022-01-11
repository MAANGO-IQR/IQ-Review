// Form to log user in
// Two inputs: Email & password
import React from 'react';

function LoginForm () {
    return (
        <div className='flex-column'>
            <form autoComplete='false'>
                <input type='text' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
            </form>
        </div>
    )
}

export default LoginForm;