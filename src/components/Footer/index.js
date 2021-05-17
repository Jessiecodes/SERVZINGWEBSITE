import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <div className="container-fluid" id="Footer_container">
      <h1 className="text-center text-white pt-5">More coming soon! </h1> 
      <div
        className="flexRow flexCol justify-sb align-center"
        style={{ margin: "50px 0" }}
      >
        <div className="conversationContainer primaryBgColor mtb-10">
        <ul className="footer-links">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links">
                           Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links">
                           Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                           Contact
                        </Link>
                    </li>
                 </ul>
        </div>
        <div class="copyright">
        &copy; Copyright 2021 SERVZING
        </div>
      </div>
    </div>
  );
};

export default Footer;
