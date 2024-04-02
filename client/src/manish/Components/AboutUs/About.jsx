import React from 'react';
import './about.css'; // Import your CSS file

import Img2 from './manages.jpeg.jpg';
import Img3 from './supream.jpeg.jpg';
const About = () => {
  return (
    <div className='about-container'>
      <header>
        <h1>About Us</h1>
      </header>
      <div className="quot">
        <h1>"Empowering Every Citizen, Enabling Justice for All."</h1>
      </div>
      <div className="new2">
        <div className="new3">
          <div className="t1x">
            <h1><span className="highlighted-text">About this Platform</span></h1>
          </div>
          <div className="t2">
            <h2>&#8243; The Ministry of Law and Justice, Government of India, is embarking on a groundbreaking initiative to revolutionize the legal service landscape within the nation. This visionary project, known as the "Legal Services eMarketplace," aims to bridge the gap between legal service providers and the citizens of India &#8243;</h2>
          </div>
          <div className="t3">
            <button className="button">Join Us</button>
          </div>
        </div>
        <div className="img">
          <img src={Img2} alt="" width="600px" height="400px" className="rounded-image" />
        </div>
      </div>

      <div className="new4">
        <div className="img">
          <img src={Img3} alt="" width="600px" height="400px" className="rounded-image" />
        </div>
        <div className="new3">
          <div className="t1x">
            <h1><span className="highlighted-text"></span> Performance Commitment</h1>
          </div>
          <div className="t2">
            <ul>
              <li><b>Efficiency:</b> Our platform streamlines the process of finding and connecting with qualified legal service providers, saving you valuable time and effort.</li>
              <li><b>Transparency:</b> We prioritize transparency in all interactions. You can expect clear and straightforward communication when engaging with legal professionals through our platform.</li>
              <li><b>Quality Assurance:</b> We maintain a stringent quality assurance process to ensure that the legal service providers on our platform meet the highest standards of expertise and professionalism.</li>
              <li><b>Accessibility:</b> Our commitment to inclusivity means that our platform is designed to be accessible to citizens from all socio-economic backgrounds. Legal services should be within reach for everyone, and we're making that a reality.</li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        &copy; 2023 Team CodeLions
      </footer>
    </div>
  );
}

export default About;
