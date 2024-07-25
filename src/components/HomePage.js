import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../Images/culturalevent1.jpg";
import Image2 from "../Images/science_exhibition.jpg";
import Image3 from "../Images/annualsportsday.jpg";
import Image4 from "../Images/Logo.png";

 const HomePage = () =>{
       

    return(
        <>
      <div id="carouselExampleCaptions" className="carousel slide half-screen-height" data-bs-ride="carousel" style={{marginTop:"13px"}}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" style={{borderRadius:"10px"}}>
        <div className="carousel-item active">
          <img src={Image1} className="d-block w-100 " style={{height:"50%"}}/>
          <div className="carousel-caption">
            <h5 className="common">Cultural Fest</h5>
            <p className="common"> Embracing Diversity and Creativity</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Image2} className="d-block w-100 " alt="Slide 2"style={{height:"50%"}} />
          <div className="carousel-caption">
            <h5 className="common">Science Exhibition</h5>
            <p className="common">Showcasing Student Innovations</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block w-100 " alt="Slide 3"style={{height:"50%"}} />
          <div className="carousel-caption">
            <h5 className="common"> Annual Sports Day</h5>
            <p className="common">Celebrating Excellence in Sports</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

      {/* Card for showing school details */}
      <div className="card mb-3 h-100" style={{marginTop:"14px",backgroundColor:"rgb(35, 10, 111)"}} >
        <div className="row g-0 h-100">
          <div className="col-12 col-md-4">
            <img src={Image4} className="img-fluid rounded-start h-100" alt="Springdale Public School" />
          </div>
          <div className="col-12 col-md-8 d-flex align-items-center">
            <div className="card-body">
              <h3 className="card-title" style={{fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"xx-large",color:"white",textDecoration:"underline"}}>Springdale Public School</h3>
              <p className="card-text"  style={{fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"xx-large",color:"white"}}>Welcome to Springdale Public School, where we nurture young minds for a brighter future</p>
            </div>
          </div>
        </div>
      </div>




        </>
    )
 }
 export default HomePage;