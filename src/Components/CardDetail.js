import React,{useEffect,useState} from 'react'
import "./CardDetail.css"


function CardDetail() {
    // params value finder code
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const Id = urlParams.get('id');
    
    // find product request


    const[details,setDetails]=useState({})
  
    useEffect(() => {
      fetch(`http://localhost:5000/cardDetails?Id=${encodeURIComponent(Id)}`)
        .then((response) => response.json())
        .then((data) => {
          setDetails(data[0])
          ; // Update the state with the retrieved image URL
        })
        .catch((error) => {
          console.error(error);
        });
    }, [Id]);
  
    // set image function
    const [url, setURL] = useState(`url(https://cdn.dribbble.com/users/1549398/screenshots/6727060/dot_loader.gif)`);
  
    useEffect(() => {
      setURL(`url(${details.Img1})`); // Update the url state whenever the info state changes
    }, [details]);
  
    function thumbnail(e, urlId) {
      setURL(urlId);
    }

    // console.log(details)
    return (
      <div className='CardDetail'>
       
        <div className="wrapper">
          <header>
            <h1>{details.City} {details.Country}</h1>
            <span><b>₹{details.Price}</b>/night</span>
            <span><b>★ {details.Rating} </b>Rating</span>
          </header>
  
          <div className="image-gallery">
            <aside className="thumbnails">
              <span onClick={(e) => thumbnail(e, `url(${details.Img1})`)}  className="selected thumbnail" data-big="http://placekitten.com/420/600">
                <div className="thumbnail-image" style={{ backgroundImage: `url(${details.Img1})` }}></div>
              </span>
              <span onClick={(e) => thumbnail(e, `url(${details.Img2})`)} to="#" className="thumbnail" data-big="http://placekitten.com/450/600">
                <div className="thumbnail-image" style={{ backgroundImage: `url(${details.Img2})` }}></div>
              </span>
              <span onClick={(e) => thumbnail(e, `url(${details.Img3})`)} to="#" className="thumbnail" data-big="http://placekitten.com/460/700">
                <div className="thumbnail-image" style={{ backgroundImage: `url(${details.Img3})` }} ></div>
              </span>
           
            </aside>
  
            <main className="primary" style={{ backgroundImage: url }}></main>
          </div>
        </div>
      </div>
    );
  }
  

export default CardDetail