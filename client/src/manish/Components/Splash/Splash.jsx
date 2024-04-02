import React, { useEffect, useState } from "react";
import SplashImg from './spash.jpg';
import Spinner from "react-bootstrap/Spinner";
import './splash.css';
const Splash = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the image after 3 seconds
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`fullscreen-image ${isVisible ? "visible" : "hidden"}`}>
     
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default Splash;
