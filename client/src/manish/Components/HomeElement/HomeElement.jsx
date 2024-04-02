import React from "react";
import "./homeelement.css";
import Card from "./Card";
import lawLogo from "../../Images/lawyer-logo.png";
import clientLogo from '../../Images/client-logo.png';
import docWriterLogo from '../../Images/doc-writer-logo.png';
import notaryLogo from '../../Images/notary-logo.png';
const HomeElement = () => {
   
    const card1a = "Search Lawyer";
    const card2a = "Search Aritrator";
    const card3a = "Search Notary";
    const card4a = "Document Writer";
    
    
    return (
    <div className="home-element">
          <Card  h3={lawLogo} a={card1a} />
          <Card  h3={clientLogo} a={card2a} />
          <Card  h3={notaryLogo} a={card3a} />
          <Card  h3={docWriterLogo} a={card4a} />
          
          
        
      
    
    </div>
  );
};

export default HomeElement;
