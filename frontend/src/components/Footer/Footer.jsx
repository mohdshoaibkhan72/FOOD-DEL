import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-center-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            ratione unde asperiores maxime tempore corrupti optio laboriosam,
            beatae sapiente officiis, consectetur nulla quaerat accusantium enim
            inventore voluptatum sit dicta sed ipsam nihil sint! Vel?
          </p>
          <div className="footer-social-icon">
            <a href="https://www.facebook.com/" target="blank">
              <img src={assets.facebook_icon} alt="" />{" "}
            </a>
            <a href=" https://twitter.com/?lang=en" target="blank">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/shoaib72/" target="blank">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-center-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomoto.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
