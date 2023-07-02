import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import React,{useState} from 'react';
import {Link} from "react-router-dom"
function Card(props) {
    const [hide ,setHide] = useState(false)
  return (
    <div>
    <Link to={`/cardDetails?id=${props.Id}`}>
    <Carousel onMouseEnter={()=>setHide(true)} onMouseLeave={()=>setHide(false)} interval={null} indicators={false} controls={hide}>
      <Carousel.Item>
        <img
         className="fixed-size-img"
          src={props.Img1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="fixed-size-img"
          src={props.Img2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="fixed-size-img"
          src={props.Img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="fixed-size-img"
          src={props.Img4}
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
    </Link>
    <div className='details'>
      <span className='item1'><b>{props.City}</b></span>
      <span className='item2'>{props.Country}</span>
      <span className='item3'><b>₹</b> {props.Price}</span>
      <span className='item4'><b>★</b>{props.Rating}</span>
      
    </div>
    
    </div>
  );
}

export default Card;