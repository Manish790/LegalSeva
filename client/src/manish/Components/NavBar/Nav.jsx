import React from "react";
import "./nav.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
const Nav = () => {
  // var down = <FontAwesomeIcon icon={faCaretDown} />;
  // var right = <FontAwesomeIcon icon={faPlay} />;
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="#">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
       
        <li>
          <Link to="#">SERVICES {}</Link>
          <div className="submenu">
            <ul>
              <li>
                <Link to="/mediators">Mediators</Link>
              </li>
              <li>
                <Link to="/lawyer">Lawyer</Link>
              </li>
              <li>
                <Link to="/arbitrator">Arbitrator</Link>
              </li>
              <li>
                <Link to="/notary">Notary</Link>
              </li>
              <li>
                <Link to="/document-writer">Document Writer</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="#">APPLY LEGAL AID {}</Link>
          <div className="submenu">
            <ul>
              <li>
                <Link to="#">A</Link>
              </li>
              <li>
                <Link to="#">B</Link>
              </li>
              <li>
                <Link to="#">C</Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="#">LAW GUIDES {}</Link>
          <div className="submenu">
            <ul>
              <li>
                <Link to="#">IPC SECTIONS</Link>
              </li>
              <li>
                <Link to="#">CrPC Sections</Link>
              </li>
              <li>
                <Link to="#">CPC Sections</Link>
              </li>
              <li>
                <Link to="#">Hindu Marriage Act</Link>
              </li>
              <li>
                <Link to="#">Income Tax Act</Link>
              </li>
              <li>
                <Link to="#">Constitution Of India</Link>
              </li>
              <li>
                <Link to="#">Divorce Law</Link>
              </li>
              <li>
                <Link to="#">Criminal Law</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="legal-enquiry">LEGAL ENQUIRY </Link>
          
        </li>
        <li>
          <Link to="#">MISCELLANEOUS {}</Link>
          <div className="submenu">
            <ul>
              <li>
                <Link to="#">A</Link>
              </li>
              <li>
                <Link to="#">B</Link>
              </li>
              <li>
                <Link to="#">C</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="#">GALLERY </Link>
          
        </li>
        <li>
          <Link to="#">MEDIA COVERAGE {}</Link>
          <div className="submenu">
            <ul>
              <li>
                <Link to="#">A</Link>
              </li>
              <li>
                <Link to="#">B</Link>
              </li>
              <li>
                <Link to="#">C</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="#">LOGIN {}</Link>
          <div className="submenu">
            <ul>
              <li>
                <Link to="login">As Client</Link>
              </li>
              <li>
                <Link to="login">As Service Provider</Link>
              </li>
             
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
