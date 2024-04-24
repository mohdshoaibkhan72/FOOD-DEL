import React from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={assets.logo}></img>
        <ul className="navbart-menu">
          <li>home</li>
          <li>menu</li>
          <li>mobile app</li>
          <li>contact us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="serch icons" />
          <div className="navbar-serch-icons"></div>
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sing in</button>
      </div>
    </>
  );
}

export default Navbar;
