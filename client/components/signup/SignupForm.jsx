// Form to log user in
// 5 inputs: firstName, lastName, username, password, email
import React from 'react';

function SigninForm () {
    return (
        <div className='flex-column'>
            <form autoComplete='false'>
                <input type='text' placeholder='First Name'></input>
                <input type='text' placeholder='Last Name'></input>
                <input type='username' placeholder='Username'></input>
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
            </form>
        </div>
    )
}

export default SigninForm;