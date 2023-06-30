import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


function UpItems() {

  let { id } = useParams();
 


  const[cityInfo,setCityInfo]=useState("")
  const[countryInfo,setCountryInfo]=useState("")
  const[typeInfo,setTypeInfo]=useState("")
  const[priceInfo,setPriceInfo]=useState("")
  const[ratingInfo,setRatingInfo]=useState("")




  fetch('http://localhost:5000/getDatabase/update/:id')
  .then((response)=>response.json())
  .then((data)=>{
    setCityInfo(data.City)
    setCountryInfo(data.Country)
    setTypeInfo(data.Type)
    setPriceInfo(data.Price)
    setRatingInfo(data.Rating)
   
  })




  // ***************** find a data in databse *************
  fetch(`http://localhost:5000/getDatabase/update/:${id}`,{
    method: 'POST',
    body: JSON.stringify({
      id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    
  })

   // fect data 
 

  // ***************************** patch method ************

  function handleClick(){
    console.log(cityInfo,countryInfo,typeInfo,priceInfo,ratingInfo)
  //   fetch(`http://localhost:5000/getDatabase/updateCard/:${id}`, {
  //   method: 'Post',
  //   body: JSON.stringify({
  //     name:"Hello World"
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
}

  return (
    <div className='AddPage'>
      <h4>Card-No-{id}</h4>
      <div className='AddItemBox'>
      
        <input
          required
          className='item1'
          placeholder='city-Name'
          type="text"
          value={cityInfo}
          onChange={(e) => setCityInfo(e.target.value)}
        />

        <input
          className='item2'
          placeholder='country-Name'
          type="text"
          value={countryInfo}
          onChange={(e) => setCountryInfo(e.target.value)}
        />

        <input
          className='item3'
          placeholder='Price-IN'
          type="text"
          value={priceInfo}
          onChange={(e) =>setPriceInfo(e.target.value)}  
        />

        <input
          className='item4'
          placeholder='Type-Name'
          type="text"
          value={typeInfo}
          onChange={(e) =>setTypeInfo(e.target.value)}
          
        />
        <input
          className='item5'
          placeholder='Rating'
          type="text"
          value={ratingInfo}
          onChange={(e) =>setRatingInfo(e.target.value)}
        />
       
        <input
          className='item6'
          placeholder='img1'
          type="file"
          // value={img1Info}
          onChange={(e) =>(e.target.value)}
        />
        <input
          className='item7'
          placeholder='img2'
          type="file"
          // value={img2Info}
          onChange={(e) =>(e.target.value)}
        />
        <input
          className='item8'
          placeholder='img3'
          type="file"
          // value={img3Info}
          onChange={(e) =>(e.target.value)}
        />
        <input
          className='item9'
          placeholder='img4'
          type="file"
          // value={img4Info}
          onChange={(e) => (e.target.value)}
        />
        <button className='item10' onClick={handleClick}>Up-date</button>
      </div>
    </div>
  );
};

export default UpItems;


