import React, { useState } from 'react';

function AddItem() {

  const [city,setName] = useState("")
  const [country,setCountry] = useState("")
  const [price,setPrice] = useState("")
  const [type,setType] = useState("")
  const [rating,setRating] = useState("")
  const [img1,setImg1] = useState("")
  const [img2,setImg2] = useState("")
  const [img3,setImg3] = useState("")
  const [img4,setImg4] = useState("")
  
  function save(){
    
    const obj = {
      city,country,type,price,rating,img1,img2,img3,img4
    }
    fetch('http://localhost:5000/getDatabase/save', {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
 
  return (
    <div className='AddPage'>
      <h3>Add-New-Card</h3>
      <div className='AddItemBox'>
        <input
          
          
          className='item1'
          placeholder='city-Name'
          type="text"
          value={city}
          onChange={(e) => setName(e.target.value)}
         
        />
        <input
          className='item2'
          placeholder='country-Name'
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          
        />
        <input
          
          className='item3'
          placeholder='Price-IN'
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          
        />
        <input
          className='item4'
          placeholder='Type-Name'
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          
        />
        <input
          className='item5'
          placeholder='Rating'
          type="text"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
         
        />
       
        <input
          className='item6'
          placeholder='img1'
          type="file"
          value={img1}
          onChange={(e) => setImg1(e.target.value)}
        />
        <input
          className='item7'
          placeholder='img2'
          type="file"
          value={img2}
          onChange={(e) => setImg2(e.target.value)}
        />
        <input
          className='item8'
          placeholder='img3'
          type="file"
          value={img3}
          onChange={(e) => setImg3(e.target.value)}
        />
        <input
          className='item9'
          placeholder='img4'
          type="file"
          value={img4}
          onChange={(e) => setImg4(e.target.value)}
        />
        <button className='item10' onClick={()=>save()}>Submit</button>
      </div>
    </div>
  );
};

export default AddItem;
