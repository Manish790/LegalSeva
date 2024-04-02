import React, { useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Time from "../Time_and_Date/Time";
import Nav from "../NavBar/Nav";
import Carous from "../Carousel/Carous";
import Test from "../Testimonials/Test";
import VectorBg from "../VectorBg/VectorBg";
import HomeElement from "../HomeElement/HomeElement";
import BotImage from "../../Images/bot.png"; // Import the bot image
import Footer from '../Footer/Footer';
import NewTest from '../NewTest/NewTest';
// import Section5 from '../Section5/Section5';
import Section7 from '../Section7/Section7';
import Type from '../TypeCard/TypeCard';
import LawyerPerson from '../LawyerPerson/LawyerPerson';
import VoiceAssistant from "../VoiceAssistant/VoiceAssistant";
const Home = () => {
  const [iframeVisible, setIframeVisible] = useState(false);

  const toggleIframeVisibility = () => {
    setIframeVisible(!iframeVisible);
  };

  return (
    <div className="Home">
<VoiceAssistant/>
      <div className="stick">
        <Time />
        <Header />
        <Nav />
      </div>
      <VectorBg/>
      <Type />
      <Carous />
      <HomeElement />
      <Test />
      <LawyerPerson />
      <div className="bot-wrap">
        <div onClick={toggleIframeVisibility} className="btn-toggle-bot">
          {iframeVisible ? (
            <button className="close-btn">❌</button>
          ) : (
            <img src={BotImage} alt="Bot" width={"100px"} />
          )}
        </div>
        {iframeVisible && (
          <iframe
            width="520"
            height="600"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/846a23f9-61c2-4266-af2e-da8561ff53d2"
          ></iframe>
        )}
      </div>

      <NewTest />
      {/* <Section5 /> */}
      <Section7 />
      <div className="footer-home-container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
