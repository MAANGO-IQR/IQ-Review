// Form to log user in
// 5 inputs: firstName, lastName, username, password, email
import React from 'react';

function SigninForm () {
    return (
        <div>
            <form autoComplete='false' className='flex-column'>
                <input type='text' placeholder='First Name' className=' padding-sm padding-left-sm mb-sm'></input>
                <input type='text' placeholder='Last Name' className=' padding-sm padding-left-sm mb-sm'></input>
                <input type='username' placeholder='Username' className=' padding-sm padding-left-sm mb-sm'></input>
                <input type='email' placeholder='Email' className=' padding-sm padding-left-sm mb-sm'></input>
                <input type='password' placeholder='Password' className=' padding-sm padding-left-sm mb-sm'></input>
            </form>

            <button className='general-button mb-sm'>Sign Up</button>
        </div>
    )
}

export default SigninForm;