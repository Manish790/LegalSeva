import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./lawyer-card.css";
import ReactStars from "react-stars";
import { Button } from "antd";
import { DatePicker, message, TimePicker } from "antd";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  const [currrating, setCurrRating] = useState(0);
  const [profileclicked, setProfileClicked] = useState(false); // Step 2: Initialize profileclicked state variable

  function updateCurrRating(newRating) {
    setCurrRating(currrating+newRating);
   
  }

  // Step 3: Add an onClick event handler to set profileclicked to true
  function handleViewProfileClick() {
    setProfileClicked(!profileclicked);
    // You can also navigate to the profile page here if needed
    // navigate(`/doctor/profile/${doctor._id}`);
  }

  return (
    <>
      <div className="card m-2 w-51" style={{ cursor: "pointer" }}>
        <div
          className="card-header"
          style={{ backgroundColor: "navy", color: "white" }}
        >
          <span className="doctor-list-name">
            {doctor.firstName} {doctor.lastName}
          </span>
        </div>
        <div className="card-body">
          <p>
            <b>Specialization:</b> {doctor.specialization}
          </p>
          <p>
            <b>Experience:</b> {doctor.experience}
          </p>
          <p>
            <b>Fees Per Consultation:</b> {doctor.feesPerConsultation}
          </p>
          <p>
            <b>Timings:</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
          <p>
            <b>Rating: {currrating}</b>
            <ReactStars
              count={5}
              size={36}
              color2={"#ffd700"}
              value={currrating}
              onChange={updateCurrRating}
            />
            <b className="book-now-btn">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block m-2"
                onClick={handleViewProfileClick} // Attach the onClick event handler
              >
                View Profile
              </button>
              {profileclicked ? <h1>hello</h1> : null}

              <button
                type="button"
                className="btn btn-primary btn-lg btn-block m-2"
                onClick={() =>
                  navigate(`/doctor/book-appointment/${doctor._id}`)
                }
              >
                Book Now
              </button>
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
