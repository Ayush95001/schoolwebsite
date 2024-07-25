
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import About from './components/About';
import Academics from './components/Academics';
import Admission from './components/Admission';
import Faculty from './components/Faculty';
import Student from './components/Student';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import AdmissionForm from './components/AdmissionForm';

function App (){
  const[formStatus,setFormStatus] = useState(true);
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} exact/>
        <Route path="/AboutUs" element={<About/>}/>
        <Route path="/Academics" element={<Academics/>}/>
        <Route path="/Admission" element={<Admission/>}/>
        <Route path="/Faculty" element={<Faculty/>}/>
        <Route path="/Students" element={<Student/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        
        <Route path="/AdmissionForm" element={<AdmissionForm formStatus={formStatus} setFormStatus={setFormStatus}/>}/>
      </Routes>
    </Router>


    </>
  )
}
export default App;