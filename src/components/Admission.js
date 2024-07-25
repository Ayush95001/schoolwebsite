import React from "react";


const Admission = ()=>{

    return(
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4 " style={{marginTop:"13px"}}>
      <div className="col division"> 
        <div className="card h-100">
          <img src="https://www.thebluediamondgallery.com/handwriting/images/process.jpg" className="card-img-top" alt="Card image" />
          <div className="card-body">
            <h3 className="card-title"><b style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",textDecoration:"underline"}}>Process</b></h3>
            <p className="card-text" style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large"}}>Admission forms are available for download. Submit the completed form along with required documents at the school office</p>
          </div>
          
        </div>
      </div>
      <div className="col division">
        <div className="card h-100">
          <img src="https://st2.depositphotos.com/3591429/9132/i/950/depositphotos_91327562-stock-photo-criteria-controlling-concept.jpg" className="card-img-top" alt="Card image" />
          <div className="card-body">
            <h3 className="card-title" style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large",textDecoration:"underline"}}>Criteria</h3>
            <p className="card-text" style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large"}}>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades</p>
          </div>
        </div>
      </div>
      <div className="col division">
        <div className="card h-100">
          <img src="https://www.bssc.edu.au/wp-content/uploads/2016/11/Important-dates-1.jpg" className="card-img-top" alt="Card image" />
          <div className="card-body">
            <h3 className="card-title" style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large",textDecoration:"underline"}}>Important Dates</h3>
            <p className="card-text" style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",fontSize:"x-large"}}>
                <ul>
                  <li>Admission Form Availability: March 1st</li>
                  <li>Last Date for Submission: March 31st</li> 
                  <li>Entrance Test: April 15th</li> 
                  <li>Announcement of Results: April 30th</li>
                </ul>
            </p>
            
          </div>
        
        </div>
      </div>
    </div>
    <a className="btn btn- fixed-bottom" href="/AdmissionForm" role="button" style={{width:"100%",padding:"8px",position:"fixed",backgroundColor:"rgb(35, 10, 111)",color:"white"}}>Admission Form</a>



        </>
    )
}
export default Admission;