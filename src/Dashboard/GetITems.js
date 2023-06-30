import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

import "./dashboad.css"

function GetItems() {
  const [data,setData] = useState([])

    fetch("http://localhost:5000/getDatabase").then((response)=>(response.json())).then((json)=>setData(json))
    .catch((error)=>console.log(error))

  return (
    <div>
      <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th>_Id</th>
          <th>City</th>
          <th>Country</th>
          <th>Price</th>
          <th>Type</th>
          <th>Rating</th>
          <th>Img1</th>
          <th>Img2</th>
          <th>Img3</th>
          <th>Img4</th>
          <th>Update</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>
      {
        data.map((data)=>
        <tr>
          <td>{data._id}</td>
          <td>{data.City}</td>
          <td>{data.Country}</td>
          <td>{data.Price}</td>
          <td>{data.Type}</td>
          <td>{data.Rating}</td>
          <td>{data.Img1}</td>
          <td>{data.Img2}</td>
          <td>{data.Img3}</td>
          <td>{data.Img4}</td>
          <td><Link to={`/Admin/upDate/${data._id}`}><Button variant="outline-light">Update</Button></Link></td>
          <td><Button variant="outline-light">Delete</Button></td>
        </tr>
        )

      }
        
        
      </tbody>
      </table>
    
    </div>
  )
}

export default GetItems