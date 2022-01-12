// Form to log user in
// Two inputs: Email & password
import React from 'react';
function LoginForm () {
    return (
        <div>
            <form autoComplete='false' className='flex-column'>
                <input type='email' placeholder='Email' className='padding-sm padding-left-sm mb-sm'></input>
                <input type='password' placeholder='Password' className='padding-sm padding-left-sm mb-sm'></input>
            </form>

            <button className='general-button mb-sm'>Log In</button>
        </div>
    )
}

export default LoginForm;