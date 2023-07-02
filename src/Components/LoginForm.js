import React,{useState} from 'react'

function LoginForm(props){
    const[username,setuserName] =useState("")
    const[password,setPassword] =useState("")

    // const[logginInfo ,setlogginInfo]=useState("")

    function loginhandle(){
      fetch("http://localhost:5000/login", {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) => {
        if((data.success)==="Admin"){
            window.location.href = '/Admin';
        }else if(data.success==="User"){
            window.location.href = '/';
            
        }else{
            alert("invalid user Name or password")
            window.location.href = '/Login';
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
   
    }
    return(
      <div className="login-form">
      <div>
        <input onChange={(e)=>setuserName(e.target.value)} value={username} type="text" id="username" placeholder="Username" required />
      </div>
      <div>
        <input
          value={password}
          type="text"
          id="password"
          placeholder="Password"
          required
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <button onClick={()=>loginhandle()} className='loginBtn' type="submit">Login</button>
      <p className='toggleBtn' type="button" onClick={()=>props.data(!(props.toggle))}>Not registered? Click here to register</p>
     
    </div>
    )
  
  }

export default LoginForm