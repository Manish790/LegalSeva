import React from "react";
import SecFiveLawyerCard from "./SecFiveLawyerCard";
import "./Section5.css";
const Section5 = () => {
  return (
    <section className="SecFiveParent">
      <br />

      <h1 className="SectionHeads">Meet Top Rated Lawyers</h1>
      <br />

      <div className="Sec5Parent">
        <SecFiveLawyerCard
          Name="Albert Johnson"
          photo="toplaw2.webp"
          delay="50"
        />
        <SecFiveLawyerCard
          Name="Carl Davin"
          photo="../../Images/v1.jpg"
          delay="100"
        />
        <SecFiveLawyerCard
          Name="Tyson Miller"
          photo="toplaw3.webp"
          delay="150"
        />
        <SecFiveLawyerCard
          Name="Robert Larry"
          photo="toplaw5.webp"
          delay="200"
        />
      </div>
    </section>
  );
};

export default Section5;
