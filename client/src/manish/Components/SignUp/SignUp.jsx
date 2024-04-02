import React, { useState } from "react";
import "./signupPage.css";
import { Link, useNavigate } from "react-router-dom";

import { notification } from "antd";

const SignUpPage = () => {
  

  


  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [gender, setGender] = useState("");
  let [password, setPassword] = useState("");

 

  const handleSubmit = () => {
    let data = {
      email,
      password,
      name,
      gender,
      phone,
    };
   
  };
  return (
    <div className="signUpdiv">
      
      <Link to="/">
        <img className="Aclabsolute" src="Images/ACEyellow.png" alt="" />
      </Link>
      <div>
        <form
          className="Signupform"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h1 className="RegisterTitle">Register</h1>
          <p style={{ color: "grey", fontSize: "13px" }}>
            Signup to Ace Legal Services
          </p>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="SignupUserName"
            placeholder="&nbsp;&nbsp;Username"
            required
          />
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            className="SignupEmail"
            placeholder="&nbsp;&nbsp;Email"
            required
          />
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            className="SignupPass"
            placeholder="&nbsp;&nbsp;Password"
            required
          />
          <input
            onChange={(event) => {
              setGender(event.target.value);
            }}
            type="text"
            className="SignupGender"
            placeholder="&nbsp;&nbsp;Gender"
            required
          />
          <input
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            type="number"
            className="SignupPhone"
            placeholder="&nbsp;&nbsp;Phone Number"
            required
          />

          <span className="alreadyacc">
            Already have an account ?
            <Link className="SignInSmol" to="/login">
              &nbsp; Sign in
            </Link>
          </span>
          <input
            type="submit"
            value="Continue"
            style={{ cursor: "pointer", margin: "0" }}
            className="ContinueRegis"
          />

          <div className="social-message">
            <div className="line">-</div>
            <p className="message">Login with social accounts</p>
            <div className="line">-</div>
          </div>
          <div className="SocialIcons">
            <div>
              <img
                style={{ width: "30px" }}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt="icon"
              />
              <label>Continue With Google</label>
            </div>
            <div>
              <img
                style={{ width: "27px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png"
                alt="icon"
              />
              <label>Continue With Facebook</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
