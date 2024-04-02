import React, { useEffect, useState } from 'react';
import './carous.css';

import Image1 from './img1.png';
import Image2 from './img2.png';

const Carous = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [imageSrc, setImageSrc] = useState(Image1);

const textArray = [
  "Supreme Court Ruling Sets Precedent for Online Privacy Rights",
  "Landmark Legislation Passes to Address Cybersecurity Threats",
  "New Tax Laws Aim to Simplify Small Business Reporting",
  "Legal Experts Debate the Future of Artificial Intelligence Regulations",
  "Major Criminal Justice Reform Bill Gains Bipartisan Support",
  "Environmental Lawsuits on the Rise as Climate Change Concerns Grow",
  "Controversial Immigration Policy Faces Legal Challenges in Court",
  "Legal Tech Innovations Revolutionizing the Practice of Law",
  "States Grapple with Marijuana Legalization, Federal Conflict Continues",
  "Consumer Protection Laws Strengthened to Combat Online Scams"
];



  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTrue(!isTrue); // Toggle the state to switch images
      setImageSrc(isTrue ? Image1 : Image2); // Change the image source based on the state
    }, 9000);

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, [isTrue]);

  return (
    <div className="carousel-container">
      <div className="marq">
        {" "}
        <a href="/notifications"> Notifications</a>{" "}
      </div>
      <div className="moving-text">
        <marquee behavior="scroll" direction="rtl">
          Notably, John, who argued Vernon Gonsalves’s case, explained that what
          weighed in the mind of the Court was the fact that on such bad
          material, the ac
        </marquee>
      </div>
      <img src={imageSrc} alt="ehdj" />
      <div className="right-section">
         <div className="heading">Top Notch Headlines</div>
        {/* <marquee direction="up" style={{ color: "white" }}> */}
        {textArray.map((text, index) => (
          <p key={index} className="moving-p">
            {text}
          </p>
        ))}
        {/* </marquee> */}
        <div className="moving-text"></div> 
      </div>
    </div>
  );
}

export default Carous;
