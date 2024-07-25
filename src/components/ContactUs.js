import React from "react";
const ContactUs = ()=>{
    const handleSubmit = ()=>{
        alert("Form Submitted! We will get back to you shortly");
    }
    return(
        <>
        <div className="card " style={{marginTop:"15px"}}>
      <div className="card-body" >
        <h2 style={{textAlign:"center"}}>Contact US</h2>
        <ul><li><b>Address:</b>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</li>
        <li><b>Phone:</b>+1 (123) 456-7890</li>
       
       <li><b>Email:</b>info@springdale.edu</li>
       </ul>
      </div>
    </div>
    <div className="card " style={{marginTop:"15px"}}>
        <div className="card-body">
            <h2 style={{textAlign:"center"}}>Contact Form</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
        <label for="formGroupExampleInput" class="form-label">Name</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your name"/>


        </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4"  placeholder="Enter your Email"  />
      </div>
      <div className="col-md-6">
      <label for="formGroupExampleInput" class="form-label">Message</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Write your message"/>
      </div>
     
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Submit </button>
      </div>
    </form>
        </div>
    </div>
    <div className="card " style={{marginTop:"15px"}}>
        <div className="card-body">
            <h4 style={{textAlign:"center",textDecoration:"underline"}}>Reach US!</h4>
        <iframe
        title="Google Maps"
        width="100%"
        height="400"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.392030056891!2d72.82582481490363!3d19.0759831570313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630102f9d75%3A0x9fd292f10f4d50f6!2sGateway%20of%20India%2C%20Apollo%20Bandar%2C%20Colaba%2C%20Mumbai%2C%20Maharashtra%20400001%2C%20India!5e0!3m2!1sen!2sin!4v1630086188980!5m2!1sen!2sin"
      ></iframe>
        </div>
    </div>
        </>
    )

}
export default ContactUs;
