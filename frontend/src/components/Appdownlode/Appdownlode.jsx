import React from "react";
import "./Appdownlode.css";
import { assets } from "../../assets/assets";
const Appdownlode = () => {
  return (
    <div className="heading" id="mobile-app">
      <h1>
        For Better Experience Download
        <br />
        <span>Tomato App </span>
      </h1>
      <div className="img">
        <div className="downlode_img">
          <img src={assets.play_store} alt="" />
        </div>
        <div className="downlode_img">
          <img src={assets.app_store} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Appdownlode;
