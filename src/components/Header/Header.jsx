import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <a href="" className="href">
            Residencies
          </a>
          <a href="" className="href">
            Our Value
          </a>
          <a href="" className="href">
            Contact Us
          </a>
          <a href="" className="href">
            Get Started
          </a>
          <button className="button">
            <a href="" className="href">
              Contact
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
