import React from "react";
const Faculty = ()=>{
    return(
        <>
         <div className="card FacultyCard">
      <div className="card-body">
        <h1 style={{textAlign:"center",textDecoration:"underline"}}>Faculty</h1>
        <h2 style={{textDecoration:"underline"}}>Profiles:</h2>
        <ul>
           <li><h5>John Doe:</h5> Principal, M.Ed, 20 years of experience in educational administration </li> 
           <li><h5>Jane Smith:</h5> Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</li>
           <li>
            <h5>Emily Johnson:</h5>  English Teacher, M.A. in English, 10 years of teaching experience
           </li>
           <li><h5>Michael Brown:</h5>Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience</li>
           <li><h5>Sophia Davis:</h5>Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</li>
           <li><h5>David Wilson:</h5>Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.
           </li>
        </ul>
      </div>
    </div>
        </>
    )
}
export  default Faculty;