import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {
  Route,
  Routes
} from "react-router-dom";
import AddItem from "./Dashboard/AddItem";
import GetItems from "./Dashboard/GetITems"
import UpItems from "./Dashboard/UpITems"
import Delete from "./Dashboard/Delete";
import Page404 from "./Components/Page404";
import DasNav from "./Dashboard/DasNav"
// import Home from "./Components/Home";
// import Header from "./Components/Header";
import "./App.css"
import Login from './Components/Login';
import Home from './Components/Home';
import  CardDetail from "./Components/CardDetail"
import Filters from './Components/Filters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App/> */}
    <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/Admin" element={<DasNav/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/CardDetails" element={<CardDetail/>}/>
            <Route path="/Admin/getDate" element={<GetItems/>}/>
            <Route path="/Admin/AddDate" element={<AddItem/>}/>
            <Route path="/Admin/upDate/:id" element={<UpItems/>}/>
            <Route path="/Admin/delete" element={<Delete/>}/>
            <Route path="/getDatabase/:type" element={<Home/>}/>
            <Route path="/Filter/:type" element={<Filters/>}/>
            <Route path="*" element={<Page404/>}/>
          
        </Routes>
  </BrowserRouter>

);

