"use client";

import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/menu/Menu";
import React, { useEffect } from "react";

const Home = () => {
  // add locomotive scroll
  useEffect(() => {
    const loadLocomotiveScrol = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScrol();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <div>
        <About />
      </div>
      <Menu />
      {/* temparory div */}
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default Home;
