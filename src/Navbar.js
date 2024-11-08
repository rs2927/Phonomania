import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img src="https://thumbs.dreamstime.com/b/vector-graphic-emblem-hexagon-initials-letter-pm-logo-design-template-vector-graphic-initials-letter-pm-logo-design-template-204622998.jpg" height="50px"/>
    <NavLink className="navbar-brand" to="/">PHONOMANIA</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        
       </ul>

    </div>
  </div>
</nav>

        
        </>
    );
};


export default Navbar;