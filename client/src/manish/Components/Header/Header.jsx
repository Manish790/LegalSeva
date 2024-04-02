import React from 'react';
import banner from './banner.jpg';
import './header.css';
// import Login from '../../../pages/Login';
import {Link} from 'react-router-dom';

const Header = () => {
  // Initialize the 'clicked' state variable with 'false'
  // const [clicked, setClicked] = useState(false);

  // // Function to handle the click event
  // const handleLoginClick = () => {
  //   // Set 'clicked' to 'true' when the login button is clicked
  //   setClicked(true);
  // };

  return (
    <div className='top-banner'>
      <div>
      <img src={banner} alt="Banner" useMap="#login" />
      
      <Link to='/login' className='login-text'>LogIn</Link>
      
      </div>
      {/* <map name="login">
        <area shape="rect" coords="1630,30,1835,58" href='/login' alt="LogIn Button" onClick={handleLoginClick} />
        <area shape="rect" coords="1581,80,1651,97" href="https://play.google.com/store/apps/details/legal-seva/656" alt="Google Play Store" />
        <area shape="rect" coords="1605,80,1675,97" href="https://apps.apple.com/us/app/legal-seva/id55381" alt="Apple App Store" />
      </map> */}
    </div>
  );
}

export default Header;
