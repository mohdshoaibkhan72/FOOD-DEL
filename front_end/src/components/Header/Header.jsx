import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite here</h2>
        <p>
          chose from a diverse menu feturing delectable arrays of dishes cofted
          with the first ingradiants and cultinary.OUr mission in to satisfay
          your cravaring and elevete your expretiece one delicious meal at a
          time.
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
