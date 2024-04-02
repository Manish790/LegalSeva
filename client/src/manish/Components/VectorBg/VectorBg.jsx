import React, { useEffect, useState } from "react";
import "./vectorbg.css";

const VectorBg = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const mainHeading = "Find the Right Lawyer";
  const remainingText = "For your Legal Issue!";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < mainHeading.length) {
        setText1(mainHeading.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setText2(remainingText);
      }
    }, 100); // Adjust the typing speed as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="vector-container">
      <div className="headings">
        <h1 className="mainBg-heading">
          {text1}
          <br />
          {text2}
        </h1>
        <h1 className="sub-heading">Fast, Free and Confidential</h1>
      </div>
      <div className="option-tags"></div>

      <img
        src="https://th.bing.com/th/id/R.59378bdd71f7b2b3479f9b1023febeed?rik=04lz7vMUE%2bGFVQ&pid=ImgRaw&r=0"
        alt="Your Image Alt Text"
        className="character"
      />
    </div>
  );
};

export default VectorBg;
