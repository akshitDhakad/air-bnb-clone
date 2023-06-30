import "./App.css"
import React from 'react';
import NavBar from './Components/NavBar';
import Header from "./Components/Header";
import Home from "./Components/Home";


function App() {
  // console.log(window.location.host);
  return (
    <div className="App">
      <div className="item1">
        <NavBar/>  
      </div>
      <div className="item2">
        <Header/>
      </div>
      <div className="item3">
      <Home/>

      </div>
    </div>
  );
}

export default App;
