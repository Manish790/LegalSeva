import React from 'react'
import './homeelement.css';
import test from '../../Images/v3.jpg';

const Card = ({h3,a}) => {
  return (
    <div>
      <div className="t1">
        <img src={test} alt="" className="lawyer-profile" />

        <img src={h3} alt="" className="profile-logos" />

        <a href="post.html">{a}</a>
      </div>
    </div>
  );
}

export default Card