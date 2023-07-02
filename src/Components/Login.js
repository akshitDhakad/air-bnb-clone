import React, { useState } from 'react'
import "./Login.css"
import SigupForm from './SigupForm'
import LoginForm from './LoginForm'

function Login() {
  var [loggin ,setloggin]= useState(true)



// sigup form data handler
  return (
    <div className='loggin-signup-page'>
      <div className="form-container">
      
      {
        loggin?<h2> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> Login</h2>:<h2><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> Register</h2>
      }
      {
        loggin?<LoginForm data={setloggin} toggle={loggin}/>:<SigupForm data={setloggin} toggle={loggin}/>
      }
    </div> 
    </div>
  )
}

export default Login