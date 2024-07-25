import React from "react";
import Image7 from "../Images/Curriculum.jpg";
import Image8 from "../Images/teching-methedology.jpg";
import Image9 from "../Images/EducationalResources.jpg"
const Academics = () =>{

    return(
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4 " style={{marginTop:"13px",marginBottom:"6px"}} >
      <div className="col division"> 
        <div className="card h-100">
          <img src={Image7} className="card-img-top"  />
          <div className="card-body" >
            <h4 className="card-title"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large",textDecoration:"underline"}} >Curriculum</h4>
            <p  className="card-text"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"medium"}}><h5>Primary (Grades 1-5) </h5>
           <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Arts</li>
            <li>Physical Education</li>
           </ul>
           <h5>Secondary (Grades 6-10) </h5>
           <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Science(Physics,Chemistry,Maths)</li>
            <li>Social Studies</li>
            <li>Computer Science</li>
            <li>Arts</li>
            <li>Physical Education</li>
           </ul>
           <h5>Senior Secondary (Grades 11-12)</h5>
           <h6 style={{marginLeft:"5px"}}>Science Streams</h6>
           <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Physics</li>
            <li>Chemistry </li>
            <li>Biology</li>
            <li>Computer Science</li>
           </ul>
           <h6 style={{marginLeft:"5px"}}>Commerce Streams</h6>
           <ul>
            <li>Accountancy</li>
            <li>Bussiness Studies</li>
            <li>Economics</li>
            <li>Mathematics </li>
            <li>Englsih</li>
        
           </ul>
</p>
          </div>
          
        </div>
      </div>
      <div className="col division">
        <div className="card h-100">
          <img src={Image8} className="card-img-top"  />
          <hr/>
          <div className="card-body">
            <h4 className="card-title"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large",textDecoration:"underline"}} >Teaching Methodologies</h4>
            <p className="card-text"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large"}} >We use a blend of traditional and modern teaching techniques to cater to different learning styles</p>
          </div>
        </div>
      </div>
      <div className="col division">
        <div className="card h-100">
          <img src={Image9} className="card-img-top"  />
          <hr/>
          <div className="card-body">
            <h4 className="card-title"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large",textDecoration:"underline"}} >Education Resources</h4>
            <p className="card-text"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large"}} >
            Digital classrooms, interactive learning modules, and access to online educational platforms
            </p>
            
          </div>
        
        </div>
      </div>
    </div>
        </>
    )
}
export default Academics;