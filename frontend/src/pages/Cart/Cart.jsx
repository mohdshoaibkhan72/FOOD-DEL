import React, { useContext } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

import { StoreContext } from "../../context/StoreContext";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartamount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div key="crt" className="cart">
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
              <div>
                <div className="cart-item-tittle cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cros">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>cart Totals</h2>
          <div>
            <div className="cart-total-detals">
              <p>Subtotal</p>
              <p>${getTotalCartamount()}</p>
            </div>
            <div className="cart-total-detals">
              <p>Dilivery Fee</p>
              <p>${getTotalCartamount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detals">
              <b>Total</b>
              <b>
                ${getTotalCartamount() === 0 ? 0 : getTotalCartamount() + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHEAKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have promo code ,Enter is here</p>
            <div className="cart-prmp-input">
              <input type="text" placeholder="prpmo code" />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
