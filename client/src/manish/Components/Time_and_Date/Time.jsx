import React, { useState, useEffect } from 'react';
import './time.css';


const Time = () => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const todaysDate = currentTime.getDate();
  const todaysMonth = months[currentTime.getMonth()];
  const year = currentTime.getFullYear();
  let hour = currentTime.getHours();
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();
  
  
  // Determine AM or PM
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hour = hour % 12 || 12;

  return (
    <div className='date-time'>
      <div className="date-n-time">
        {todaysDate} {todaysMonth.substring(0, 3)}, {year} {hour}:{min}:{sec} {ampm}
      </div>
      
      <div className="lang">English</div>
     
       
    
    </div>
  );
};

export default Time;
