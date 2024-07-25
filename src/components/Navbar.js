import React from "react";
import { Link } from "react-router-dom";
 const Navbar = ()=>{
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-custom" style={{color:"white"}}>
      <div className="container-fluid">
        <a className="navbar-brand  name" href="#"  style={{color:"white",padding:"5px",margin:"10px",fontSize:"x-large"}}>Springdale Public School</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={{color:"white"}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AboutUs"style={{color:"white"}} >About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Academics"style={{color:"white"}}>Academics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Admission"style={{color:"white"}}>Admission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Faculty"style={{color:"white"}}>Faculty</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Students"style={{color:"white"}}>Students</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Gallery"style={{color:"white"}}>Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ContactUs"style={{color:"white"}}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
        </>
    )
 }
 export default Navbar;