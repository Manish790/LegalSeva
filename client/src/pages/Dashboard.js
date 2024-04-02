import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

const Dashboard = () => {
  const [doctors, setDoctors] = useState([]);

  // login user data
  const getUserData = async () => {
    try {

      const res = await axios.get(
        "http://localhost:4000/api/v1/user/getAllDoctors",

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


      console.log('$$$$$$$$$$$$$$$error$$$$$$$$$$');
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <h1 className="text-center" style={{ position: "relative" }}>
        Service Providers
      </h1>

      <Row>

        {console.log("doctor value",doctors)}
        {doctors && doctors.map((doctor,index) => <DoctorList doctor={doctor} key={index}/>)}
      </Row>
    </Layout>
  );
};

export default Dashboard;
