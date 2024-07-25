
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setFormStatus, setHasSubmitted } from '../features/formSlice';

const AdmissionForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formStatus = useSelector(state => state.form.formStatus);
  const hasSubmitted = useSelector(state => state.form.hasSubmitted);

  useEffect(() => {
    if (hasSubmitted) {
      navigate("/");
    }
  }, [hasSubmitted, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(setFormStatus(!formStatus));
    
    dispatch(setHasSubmitted(true));
  };

  if (hasSubmitted) {
    return <div className="card" style={{ marginTop: "15px" }}>
      <div className="card-body">
        <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Form Submitted</h2>
        <p style={{ textAlign: "center" }}>You have already submitted the form.</p>
      </div>
    </div>;
  }

  return (
    <div className="card" style={{ marginTop: "15px" }}>
      <div className="card-body">
        <h2 style={{ textAlign: "center", textDecoration: "underline" }}>Admission Form</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="fatherNameInput" className="form-label">Father's Name</label>
            <input type="text" className="form-control" id="fatherNameInput" placeholder="Enter Father's name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="motherNameInput" className="form-label">Mother's Name</label>
            <input type="text" className="form-control" id="motherNameInput" placeholder="Enter Mother's name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="dobInput" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dobInput" />
          </div>
          <div className="col-md-6">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input type="email" className="form-control" id="emailInput" placeholder="Enter your Email" />
          </div>
          <div className="col-md-6">
            <label htmlFor="mobileInput" className="form-label">Mobile No.</label>
            <input type="tel" className="form-control" id="mobileInput" placeholder="Enter your Mobile No." />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
