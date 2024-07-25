import React from "react";
import Imagea  from "../Images/Card1Logo.jpg";
import Imageb from "../Images/Card2Logo.jpg";
import Imagec from "../Images/Card3Logo.png";
import Imaged from "../Images/Card4Logo.png";
import Imagee from "../Images/Card5Logo.jpg";
const About = ()=>{


    return(<>
    <div className="row row-cols-1 row-cols-md-3 g-4  cr-cont" style={{marginTop:"6px"}}>
      <div className="col">
        <div className="card">
          <img src={Imagea} className="card-img-top" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large",textDecoration:"underline"}}>History</h5>
            <p className="card-text"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large"}}>
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Imageb} className="card-img-top" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large",textDecoration:"underline"}}>Vision</h5>
            <p className="card-text"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large"}}>
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Imagec} className="card-img-top" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large",textDecoration:"underline"}}>Mission</h5>
            <p className="card-text"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large"}}>
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Imaged} className="card-img-top" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large",textDecoration:"underline"}}>Priciple's Message</h5>
            <p className="card-text"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large"}}>
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Imagee} className="card-img-top"  alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large",textDecoration:"underline"}}>Infrastructure and Facilities</h5>
            <p className="card-text"style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large"}}>
            <ul>
           <li> State-of-the-art science and computer labs</li> 
            <li>Spacious and well-equipped classrooms.
            </li>
           <li> Library with a vast collection of books and digital resources
           
           </li>
             <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
            </ul>

            </p>
          </div>
        </div>
    </div>
    </div>
    </>
     )
}
export default About;