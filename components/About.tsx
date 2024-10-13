"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    img: "/assets/about/photo-1.jpg",
    title: "Our Journey",
    description:
      "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.",
  },
  {
    img: "/assets/about/photo-2.jpg",
    title: "Our Promise",
    description:
      "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.",
  },
  {
    img: "/assets/about/photo-3.jpg",
    title: "Our Team",
    description:
      "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.",
  },
];

const About = () => {
  const srcollableSectionRef = useRef(null);
  const srcollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(
      srcollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: srcollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={srcollTriggerRef}>
        <div
          ref={srcollableSectionRef}
          className="h-screen w-[300vw] flex relative"
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="h-screen w-screen flex flex-col justify-center items-center relatve "
              >
                <div className="container mx-auto">
                  <div className="flex gap-[30px] relative">
                    {/* text */}
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <Badge containerStyle="w-[180px] h-[180px]" />
                      <div className="text-center max-w-[560px]">
                        {/* title */}
                        <h2 className="h2 text-white mb-4 ">
                          <span className="mr-4">
                            {item.title.split(" ")[0]}
                          </span>
                          <span className="text-accent">
                            {item.title.split(" ")[1]}
                          </span>
                        </h2>
                        {/* separator */}
                        <div className="mb-8">
                          <Separator />
                        </div>
                        {/* description */}
                        <p className="leading-relaxed mb-6 px-8 xl:px-0 ">
                          {item.description}
                        </p>
                        {/* button */}
                        <button className="btn">See More</button>
                      </div>
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex flex-2 w-full h-[70vh] relative">
                      <Image
                        src={item.img}
                        alt=""
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
