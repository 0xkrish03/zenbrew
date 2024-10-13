"use client";

import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
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
      {/* temparory div */}
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default Home;
