import React, { useContext } from "react";
import "./FoodItems.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const FoodItems = ({ id, name, price, description, image }) => {
  const { cartItems, addTocart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-contaner">
        <img className="food-item-img" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addTocart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => {
                addTocart(id);
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
