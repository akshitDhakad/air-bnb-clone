// import React,{useEffect, useState} from 'react'
import "./header.css"
// import axios from 'axios'
import {Link} from "react-router-dom"



function Header() {

  // let [data ,setData] = useState([])


  // useEffect(()=>{
  //   fetch("http://localhost:5000/getDatabase")
  //     .then(response => response.json())
  //     .then(json =>setData(json))
  //     .catch(error => {
  //       console.error(error);
  //     });
      
  // },[])


  // const [data,setData] = useState("")


  // Clicked events *************
 
//   const handleClick = (event) => {
//     const { id } = event.target;
//     // console.log(id)
//     // filtere *****************
//     const url = `http://localhost:5000/getDatabase?Type=${id}`;
//     axios
//       .get(url)
//       .then((response) => {
//         setData(response.data);
//         // Process the retrieved data
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//   };

//  console.log(data)

  return (
    <div>
        <div class="btn-group header" role="group" aria-label="Basic outlined example">
            <Link to={`/getDatabase/Farm`}><button  name="typeBtn" id="farm"  type="button" class="btn " active="true"><img src='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg' width={"40"} alt='farm'/>Farm</button></Link>
            <Link to={`/getDatabase/Hotel`}> <button  name="typeBtn" id="hotel"  type="button" class="btn " ><img src='https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg' width={"40"} alt='farm'/>Hotel</button></Link>
           
            <Link to={`/getDatabase/Pool`}><button  name="typeBtn" id="pool"  type="button" class="btn "><img src='https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' width={"40"} alt='farm'/>Pool</button></Link>
            
            <Link to={`/getDatabase/Resort`}> <button  name="typeBtn" id="resort"  type="button" class="btn " ><img src='https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg' width={"40"} alt='farm'/>Resort</button></Link>
           
            <Link to={`/getDatabase/Villa`}><button  name="typeBtn" id="villa"  type="button" class="btn " ><img src='https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg' width={"40"} alt='farm'/>Villa</button></Link>
            
            <Link to={`/getDatabase/Beach`}><button  name="typeBtn" id="beach"  type="button" class="btn " ><img src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg' width={"40"} alt='farm'/>beach</button></Link>
            
            <Link to={`/getDatabase/House`}> <button  name="typeBtn" id="house"  type="button" class="btn " ><img src='https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' width={"40"} alt='farm'/>House</button></Link>
           
           
            <div class="dropdown">
              <button class="btn btn-dark text-bg-light dropdown-toggle border border-2 border-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
              </svg>
              </button>
              <ul class="dropdown-menu">
                <li><Link to={`/Filter/price?low-to-hight`} class="dropdown-item" >Price(low-to-hight)</Link></li>
                <li><Link to={`/Filter/rating?top-rated`} class="dropdown-item" >Top-Rated</Link></li>
               
              </ul>
            </div>
            
           
        
           
        
        </div>
    </div>
  )
}

export default Header