import React from "react";
 const Student = () =>{

    return(
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4 Std-div" style={{marginTop:"20px"}}>
      <div className="col division" > 
        <div className="card h-100">
          <img src="https://enrollbasis.com/wp-content/uploads/2023/01/Benefits-of-Extra-Curricular-Activities-990x500-1-990x500.jpg" className="card-img-top" alt="" />
          <div className="card-body">
            <h3 className="card-title" style={{textDecoration:"underline"}}>Life at Springdale:</h3>
            <p className="card-text">
               <ul> <h4 style={{textDecoration:"underline"}}>Extracurricular Activities:</h4>
               <li>Music</li>
               <li>Dance</li>
               <li>Drama</li>
               <li>Art</li>
               <li>Sports</li>
               <li>Robotics</li>
               <li>Debate Club</li>
               <li>Science Club</li>
                </ul> 
                <ul> <h4 style={{textDecoration:"underline"}}> Clubs and Societies:</h4>
               <li>Literary Society</li>
               <li>Environmental Club</li>
               <li>Astronomy Club</li>
               <li>Coding Club</li>
                </ul> 
                </p>
          </div>
          
        </div>
      </div>
      <div className="col division">
        <div className="card h-100">
          <img src="http://mvdy.amritavidyalayam.org/wp-content/uploads/sites/29/2018/06/Untitled-1.jpg" alt="" className="card-img-top"  />
          <div className="card-body">
            <h3 className="card-title" style={{textDecoration:"underline"}}>Achievements</h3>
            <p className="card-text"><ul>
                <li>John Smith:  National Level Math Olympiad Winner</li>
                <li>Sarah Lee:  Gold Medalist in State Swimming Championship</li>
                <li>Tech Innovators Club:  Winners of Inter-School Robotics Competition</li>
                </ul>
                </p>
          </div>
        </div>
      </div>
      <div className="col division">
        <div className="card h-100">
          <img src="https://www.clipartkey.com/mpngs/m/146-1467246_student-council-clip-art-student-council-font.png" className="card-img-top" alt="" />
          <div className="card-body">
            <h3 className="card-title"style={{textDecoration:"underline"}}>Student Council</h3>
            <p className="card-text">
                <ul>
                  <li><b>President:</b>Amy Parker , Grade 12</li>
                  <li><b> Vice President:</b>Rajiv Mehta , Grade 11</li>
                  <li><b>Ssecretary:</b>Lisa Wong , Grade 10</li>
                </ul>
            </p>
           
          </div>
          
        
        </div>
        
      </div>
    </div>
        </>
    )
 }
 export default Student;