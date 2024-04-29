import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} className="logo"></img>
      <ul className="navbar-menu">
        <a
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </a>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#mobile-app"
          onClick={() => {
            setMenu("mobile app");
          }}
          className={menu === "mobile app" ? "active" : ""}
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact");
          }}
          className={menu === "contact" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="serch icons" />
        <div className="navbar-serch-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sing in</button>
      </div>
    </div>
  );
}

export default Navbar;
