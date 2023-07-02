import React,{useState} from "react";

function SigupForm(props){
    const[name,setName]=useState("")
    const[username,setuserName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
  function handleChange(){
    
      fetch("http://localhost:5000/Sinup", {
        method: 'POST',
        body: JSON.stringify({
          name,
          username,
          email,
          password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) => {
        // if((data.success)==="Admin"){
        //     window.location.href = '/Admin';
        // }else{
        //     alert("invalid user Name or password")
        //     window.location.href = '/Login';
        // }
      })
      .catch((error) => {
        console.log('Error:', error);
      });

  
  }




    return(
      <form className="register-form">
   
      <div>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" id="fullname" placeholder="Full Name" required />
      </div>
      <div>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="email" placeholder="Email" required />
      </div>
      <div>
        <input onChange={(e)=>setuserName(e.target.value)} value={username} type="text" id="username" placeholder="Username" required />
      </div>
      <div>
        <input
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          type="password"
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <button onClick={handleChange} className='loginBtn' type="submit">Register</button>
      <p className='toggleBtn' type="button" onClick={()=>props.data(!(props.toggle))}>Already registered? Click here to login</p>
    </form>
  
    )
  
  }

export  default SigupForm