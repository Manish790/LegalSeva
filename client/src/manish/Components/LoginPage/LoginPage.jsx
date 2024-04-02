import React from "react";
import Login from "../Login/Login";
import "./login-page.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="loginpage">
      <div>
        <Link to="/">
          <img
            className="Aclabsolute"
            src=""
            alt=""
          />
        </Link>
        <Login />
      </div>
    </div>
  );
};
export default LoginPage;
