import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat With Us</span>
            <span className='title'>Login</span>
            <form>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                
                <button>Signin</button>
            </form>
            <p>You don't have any account? Register</p>
        </div>
    </div>
  )
}

export default Login;
