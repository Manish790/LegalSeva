import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import MyPage from '../manish/Components/Homepage/Home';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        values
      );
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Login</h3>

          <Form.Item label="Email" name="email">
            <Input type="email" required className="register-label" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required className="register-label" />
          </Form.Item>
          <div className="login-register-wrap">
            <button className="login-btn" type="submit">
              Login
            </button>
            <Link to="/register" className="click-register m-20">
              Click Here to Register
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
