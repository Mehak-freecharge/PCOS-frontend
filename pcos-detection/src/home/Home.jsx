import React from "react";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Search from "../components/Search";
import Lifestyle from "../components/Lifestyle";
import Forum from "../components/Forum";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <div id="Home">
        <Hero />
      </div>
      <div id="Search">
        <Search />
      </div>
      <div id="Explore">
        <Explore />
      </div>
      <div id="Lifestyle">
        <Lifestyle />
      </div>
      <div id="Forum">
        <Forum />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
