import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import '../styles/LayoutStyles.css';
import axios from "axios";
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // ============ handle availiblity
  const handleAvailability = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/booking-availbility",
        { doctorId: params.doctorId, date, time },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        console.log(isAvailable);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };
  // =============== booking func
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time) {
        return alert("Date & Time Required");
      }
      dispatch(showLoading());
    
      // console.log(params.doctorId,"+++",user._id,"%%%%",doctors.firstName,doctors.lastName,user,date,time," ***",localStorage.getItem("token"));
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/bookAppointment",
        {
          // userName:user.name,
          doctorId: params.doctorId,
          userName:user.name,
          userId: user._id,
          doctorFirstName:doctors.firstName,
          doctorLastName:doctors.lastName,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }

      );
      console.log("booked");
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
         const sendemail = await axios.post(
           "http://localhost:4000/api/v1/send-email", // Replace with your actual API endpoint
           {
             userName: user.name,
             userEmail: user.email,
             userId: user._id,
             date: date,
             doctorProfile: doctors.firstName,
             doctorName: doctors.lastName,
             time: time,
             // Assuming you have the user's email
           }
         );
        console.log("hello");

        if (sendemail.data.success) {
          message.success(sendemail.data.message);
        } else {
          message.error(sendemail.data.message);
        }
        
        
      }
      
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <h3 className="appoint-list">Booking Your SLot</h3>
      <div className="doctor-container">
        {doctors && (
          <div>
            <h4 className="booking-doctor-name bold">
              Adv.{doctors.firstName} {doctors.lastName}
            </h4>
            
            <h4 className="booking-doctor-fees-timing">
              Fees : {doctors.feesPerCunsaltation}
            </h4>
            <h4 className="booking-doctor-fees-timing">
              Timings : {doctors.timings && doctors.timings[0]} -{" "}
              {doctors.timings && doctors.timings[1]}{" "}
            </h4>
            <div className="booking-fields ">
              <DatePicker
                aria-required={"true"}
                className="date-time-field"
                format="DD-MM-YYYY"
                onChange={(value) => {
                  setDate(moment(value).format("DD-MM-YYYY"));
                }}
              />
              <TimePicker
                aria-required={"true"}
                format="HH:mm"
                className="date-time-field mt-2 w-100"
                onChange={(value) => {
                  setTime(moment(value).format("HH:mm"));
                }}
              />

              <button
                className="btn btn-primary mt-2"
                onClick={handleAvailability}
              >
                Check Availability
              </button>

              <button className="btn btn-dark mt-2" onClick={handleBooking}>
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
