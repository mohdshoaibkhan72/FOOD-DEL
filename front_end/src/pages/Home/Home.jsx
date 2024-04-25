import React, { useState } from "react";

import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FooodDisplay/FoodDisplay";
const Home = () => {
  const [category, setCotegory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCotegory={setCotegory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
