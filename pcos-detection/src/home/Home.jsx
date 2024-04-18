import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Search from "../components/Search";
import Lifestyle from "../components/Lifestyle";
import Forum from "../components/Forum";
import Contact from "../components/Contact";

import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div id="Home">
        <Hero />
      </div>
      {/* <RevealOnScroll>
        <div id="Search">
          <Search />
        </div>
      </RevealOnScroll> */}
      <RevealOnScroll>
        <div id="Explore">
          <Explore />
        </div>
      </RevealOnScroll>
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
