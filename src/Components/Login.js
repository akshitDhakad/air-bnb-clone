import React, { useState } from 'react'
import "./Login.css"

function Login() {
  var [loggin ,setloggin]= useState(true)


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




function LoginForm(props){
  return(
    <form className="login-form">
    <div>
      <input type="text" id="username" placeholder="Username" required />
    </div>
    <div>
      <input
        type="password"
        id="password"
        placeholder="Password"
        required
      />
    </div>
    <button className='loginBtn' type="submit">Login</button>
    <p className='toggleBtn' type="button" onClick={()=>props.data(!(props.toggle))}>Not registered? Click here to register</p>
   
  </form>
  )

}

function SigupForm(props){
  return(
    <form className="register-form">
 
    <div>
      <input type="text" id="fullname" placeholder="Full Name" required />
    </div>
    <div>
      <input type="email" id="email" placeholder="Email" required />
    </div>
    <div>
      <input type="text" id="username" placeholder="Username" required />
    </div>
    <div>
      <input
        type="password"
        id="password"
        placeholder="Password"
        required
      />
    </div>
    <button className='loginBtn' type="submit">Register</button>
    <p className='toggleBtn' type="button" onClick={()=>props.data(!(props.toggle))}>Already registered? Click here to login</p>
  </form>

  )

}




export default Login