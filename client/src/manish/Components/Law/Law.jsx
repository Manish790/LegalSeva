import React from "react";
import "./law.css"; // You can add your custom CSS file here

function Law() {
  return (
    <div className="whole-card">
      <div className="maincard" style={{ width: "13rem" }}>
        <div className="card maindivcard">
          <div
            className="card text-center"
            style={{
              width: "fit-content",
              color: "black",
              backgroundColor: "rgb(229, 225, 247)",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Filteration</h5>
              <p className="card-text">Filter Your Service Provider here!!</p>
              <a href="#" className="btn-clear">
                Clear Filter
              </a>
            </div>
          </div>
          <br />
          <h4 style={{ color: "black" }}>Type of Service Provider</h4>
          <div className="form-check" style={{ color: "black" }}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault1"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault1">
              Lawyers
            </label>
          </div>
          {/* Add more form-check elements as needed */}
          <br />
          <br />
          <h4 style={{ color: "black" }}>Seniority Level</h4>
          <div className="form-check" style={{ color: "black" }}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault2"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault2">
              Student Level
            </label>
          </div>
          {/* Add more form-check elements as needed */}
          <br />
          <br />
          <h4 style={{ color: "black" }}>Salary Range</h4>
          <div className="form-check" style={{ color: "black" }}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault3"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault3">
              $700-$1000
            </label>
          </div>
          {/* Add more form-check elements as needed */}
        </div>
      </div>
      <div className="testimonials">
        <div className="card">
          <div className="card-body">
            <div className="client-widget">
              <div className="doc-info-left">
                <div className="profile-img">
                  <a href="#">
                    <img
                      src="../navbar_react/services/public/images/Lawyersimg1.jpeg"
                      className="img-fluid"
                      alt="User Image"
                    />
                  </a>
                </div>
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">
                  <a href="#">Lawyer 1</a>
                </h4>
                <p className="doc-speciality">Criminal Lawyer</p>
                <h5 className="doc-department">Lawyer</h5>
                {/* Add more content here */}
              </div>
              <div className="doc-info-right">
                <div className="clini-infos">
                  <ul>
                    <li>
                      <i className="far fa-thumbs-up"></i> 100%
                    </li>
                    {/* Add more list items here */}
                  </ul>
                </div>
                <div className="clinic-booking">
                  <a className="view-pro-btn" href="#">
                    View Profile
                  </a>
                  <a className="apt-btn" href="#">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Law;
