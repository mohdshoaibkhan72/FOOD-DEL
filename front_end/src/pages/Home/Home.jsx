import React, { useState } from "react";

import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FooodDisplay/FoodDisplay";
import Appdownlode from "../../components/Appdownlode/Appdownlode";
const Home = () => {
  const [category, setCotegory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCotegory={setCotegory} />
      <FoodDisplay category={category} />
      <Appdownlode />
    </div>
  );
};

export default Home;
