import React from "react";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
const Navhero = () => {
  return (
    <div className="h-screen">
      <img
        about="hero_alfa_romeo_giulia"
        alt="hero_alfa_romeo_giulia"
        src="/desktop.webp"
        className="absolute top-0 bg-cover w-screen h-full"
        width={2500}
        height={2500}
      />
      <div className="bg-gradient-to-b from-bb to-transparent relative grid grid-cols-12 grid-rows-2 py-4">
        <div className="hidden col-span-5 text-white lg:flex gap-x-10 items-center justify-center">
          <ScrollLink
            to="giulia"
            spy={true}
            smooth={true}
            duration={1500}
            offset={0}
          >
            <a className="semi text-lg" href="/">
              GIULIA
            </a>
          </ScrollLink>
          <ScrollLink
            to="finitions"
            spy={true}
            smooth={true}
            duration={1500}
            offset={0}
          >
            <a className="semi text-lg" href="/">
              FINITIONS
            </a>
          </ScrollLink>
          <ScrollLink
            to="options"
            spy={true}
            smooth={true}
            duration={1500}
            offset={0}
          >
            <a className="semi text-lg" href="/">
              OPTIONS
            </a>
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={1500}
            offset={50}
          >
            <a className="semi text-lg" href="/">
              CONTACT
            </a>
          </ScrollLink>
        </div>
        <div className="col-span-5 lg:hidden"></div>
        <div className="col-span-2 justify-center items-center flex">
          <img about="logo" alt="logo" src="/logo.png" className="" />
        </div>
        <div className="col-span-5"></div>
        <div className="lg:hidden col-span-12 row-span-2 text-white flex gap-x-3 md:gap-x-7 items-center justify-center">
          <ScrollLink
            to="giulia"
            spy={true}
            smooth={true}
            duration={1500}
            offset={0}
          >
            <a className="semi text-sm" href="/">
              GIULIA
            </a>
          </ScrollLink>
          <ScrollLink
            to="finitions"
            spy={true}
            smooth={true}
            duration={1500}
            offset={0}
          >
            <a className="semi text-sm" href="/">
              FINITIONS
            </a>
          </ScrollLink>
          <ScrollLink
            to="options"
            spy={true}
            smooth={true}
            duration={1500}
            offset={0}
          >
            <a className="semi text-sm" href="/">
              OPTIONS
            </a>
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={1500}
            offset={60}
          >
            <a className="semi text-sm" href="/">
              CONTACT
            </a>
          </ScrollLink>
        </div>
      </div>

      <div className="absolute bottom-20 left-7 lg:bottom-16  lg:left-24 text-white ">
        <h1 className="semi text-3xl md:text-6xl">VENTES PRIVÉES</h1>
        <p className="semi text-2xl md:text-4xl">ALFA ROMEO GIULIA</p>
      </div>
    </div>
  );
};

export default Navhero;
