import React, { useState } from "react";
import "./FoodItems.css";
import { assets } from "../../assets/assets";
const FoodItems = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="food-item">
      <div className="food-item-img-contaner">
        <img className="food-item-img" src={image} alt="" />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setItemCount((pre) => pre + 1)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => setItemCount((pre) => pre - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{itemCount}</p>
            <img
              onClick={() => {
                setItemCount((pre) => pre + 1);
              }}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
        </div>
        <img src={assets.rating_starts} alt="" />
      </div>
      <p className="food-item-des">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  );
};

export default FoodItems;
