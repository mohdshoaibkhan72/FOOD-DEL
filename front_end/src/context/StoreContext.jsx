import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addTocart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((pre) => ({ ...pre, [itemId]: 1 }));
    } else {
      setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addTocart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
