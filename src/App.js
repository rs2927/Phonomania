//import React,{ useState } from "react";
import {Route , Routes,Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";

import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import './index.css';
const App = () =>{
   
    return(
      <>
      <Navbar />

      
  <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/About" element={<About></About>}/>
    <Route path="/Contact" element={<Contact></Contact>}/>
    

  </Routes>
  
     
     
      </>
    );

};
export default App;






