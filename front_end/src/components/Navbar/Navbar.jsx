import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartamount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} className="logo"></img>
      </Link>
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
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartamount() === 0 ? "" : "dot"}></div>
        </div>
        <button
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Sing in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
