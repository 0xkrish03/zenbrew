import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contract" },
];

const Footer = () => {
  return (
    <div className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      {/* overly */}
      <div className="absolute h-full w-full bg-black/[0.9] z-10 top-0"></div>
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          {/* logo */}
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>
          {/* nav */}
          <nav className="flex flex-col xl:flex-row items-center justify-center xl:gap-12 gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  className="text-white uppercase tracking-widest hover:text-accent transition-all"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          {/* social */}
          <ul className="flex text-white text-xl gap-4">
            <Link
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] flex items-center justify-center rounded-full hover:text-accent transition-all"
            >
              <FaYoutube />
            </Link>
            <Link
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] flex items-center justify-center rounded-full hover:text-accent transition-all"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] flex items-center justify-center rounded-full hover:text-accent transition-all"
            >
              <FaTwitter />
            </Link>
            <Link
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] flex items-center justify-center rounded-full hover:text-accent transition-all"
            >
              <FaInstagram />
            </Link>
          </ul>
          {/* copyright */}
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>&copy; Copyright 2024 - Zenbrew.All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
