import React, { useContext } from "react";
import "./placeOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartamount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="tittle">Dilivery Infomation</p>
        <div className="multi-fild">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fild">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multifild">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="Text" placeholder="Phon Number" />
      </div>
      <div className="place-order-right">
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
          <button onClick={() => navigate("/order")}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
