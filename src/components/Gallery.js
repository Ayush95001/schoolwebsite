import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Img1 from '../Images/culturalevent1.jpg';
import Img2 from '../Images/annualsportsday.jpg';
import Img3 from '../Images/scienceexhibition.jpg';
import Img4 from '../Images/Library.jpg';
import Img5 from '../Images/Classroom.jpg';
import Vid1 from "../videos/school_tour.mp4";
import Vid2 from "../videos/annual_function.mp4"


const Gallery = () => {
  return (
    <div className="container" style={{marginBottom:"5px"}}>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
        
        <div className="col">
          <div className="card" style={{ marginTop: "15px" }}>
            <div className="card-body p-0" style={{ height: "200px", overflow: 'hidden' }}> 
              <img src={Img1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        
      
        <div className="col">
          <div className="card" style={{ marginTop: "15px" }}>
            <div className="card-body p-0" style={{ height: "200px", overflow: 'hidden' }}> 
              <img src={Img2} alt=""  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        
        
        <div className="col">
          <div className="card" style={{ marginTop: "15px" }}>
            <div className="card-body p-0" style={{ height: "200px", overflow: 'hidden' }}> 
              <img src={Img3} alt=""  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        
        
        <div className="col">
          <div className="card" style={{ marginTop: "15px" }}>
            <div className="card-body p-0" style={{ height: "200px", overflow: 'hidden' }}> 
              <img src={Img4} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        
        
        <div className="col">
          <div className="card" style={{ marginTop: "15px" }}>
            <div className="card-body p-0" style={{ height: "200px", overflow: 'hidden' }}> 
              <img src={Img5} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
        
        
        <div className="col">
          <div className="card" style={{ marginTop: "15px" }}>
            <div className="card-body p-0" style={{ height: "200px", overflow: 'hidden' }}> 
              <video  
              controls
              autoPlay
              muted        
              loop         
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} >
              <source src={Vid2} type="video/mp4"/>
                 </video>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card" style={{ marginTop: "15px" }}>
            <div className="card-body p-0" style={{ height: "200px", overflow: 'hidden' }}> 
              <video 
              controls
              autoPlay
              muted        
              loop         
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} >
                <source src={Vid1} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
