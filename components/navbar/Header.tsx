"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="absolute top-[40px] z-[60] left-0 right-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-[100px] h-[40px] xl:w-[120px] z-[60]"
          >
            <Image
              src="/assets/logo.svg"
              alt=""
              fill
              className="object-contain"
            />
          </Link>
          {/* Nav trigger button */}
          <button
            onClick={() => setNavActive(!navActive)}
            className="w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none"
            aria-label="Toggle navigation" // Added for accessibility
          >
            {/* 1 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
              }`}
            ></span>
            {/* 2 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 transition-opacity duration-300 ${
                navActive ? "opacity-0" : "top-1/2"
              }`}
            ></span>
            {/* 3 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
              }`}
            ></span>
          </button>
        </div>
      </div>
      {/* nav */}
      <AnimatePresence mode="wait"> {navActive&&<Navbar/>}</AnimatePresence>
    </header>
  );
};

export default Header;
