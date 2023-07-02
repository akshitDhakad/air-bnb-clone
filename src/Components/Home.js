import React, { useEffect,useState } from 'react'
import "./Home.css"
import Card from "./Card"
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Home() {
    let [data ,setData] = useState([])
  let { type } = useParams();
 
  console.log(type)

  // *********************************************** new Code example***************************************
  if(type){
    const url = `http://localhost:5000/getDatabase?type=${type}`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        // Process the retrieved data
      })
      .catch((error) => {
        console.error(error);
      });
  }



  useEffect(()=>{
    fetch("http://localhost:5000/getDatabase")
      .then(response => response.json())
      .then(json =>setData(json))
      .catch(error => {
        console.error(error);
      });
      
  },[])

  
  return (
    <div className='Home'>
      <div className='row'>
        <div className='card '>
          {
            (data).map((data)=>
            <Card Id={data._id} City={data.City} Country={data.Country} Price={data.Price} Rating={data.Rating} Img1={data.Img1} Img2={data.Img2} Img3={data.Img3} Img4={data.Img4}/>
          )
          }
        </div>
      </div>

    </div>
  )
}

export default Home