import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-tittle">
          <p>Items </p>
          <p>Titale</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        <br />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-item-tittle cart-items-item">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Cart;
