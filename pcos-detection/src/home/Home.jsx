import React from "react";
import Hero from "../components/Hero";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <div>
      <div id="Home">
        <Hero />
      </div>
      <div id="Explore">
        <Explore />
      </div>
    </div>
  );
};

export default Home;
