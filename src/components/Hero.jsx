/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mx-auto w-full max-w-screen-xl flex flex-col lg:flex-row justify-center items-center lg:items-start pt-[240px] pb-0 px-4 lg:px-6 overflow-hidden"
    >
      <div className="z-10 w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0 lg:mb-0 mb-25">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-2 tracking-wide">
          Desenvolvedora Web Full-Stack
        </h2>
        <h1 className="whitespace-nowrap text-[clamp(2.5rem,8vw,6rem)] font-light text-gray-900 mb-4 uppercase leading-tight">
          Ana Caroline
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
          Oi, me chamo Ana. Sou formada em Sistema de Informação e sou
          programadora full-stack.
        </p>
        <div className="flex justify-center lg:justify-start gap-6">
          <a
            href="https://linkedin.com/in/anacarolinens"
            target="_blank"
            className="flex items-center px-6 py-3 rounded-[9px] text-sm sm:text-[18px] font-normal text-white bg-[var(--color-hover-gray)] duration-300 transition-transform hover:scale-115"
          >
            <img
              src="/images/linkedin.svg"
              alt="Linkedin Logo"
              width={20}
              height={20}
              className="mr-3"
            />
            Linkedin
          </a>
          <a
            href="https://github.com/anacarolinens"
            target="_blank"
            className="flex items-center px-6 py-3 rounded-[9px] text-sm sm:text-[18px] font-normal text-white bg-[var(--color-hover-gray)] duration-300 transition-transform hover:scale-115"
          >
            <img
              src="/images/github.svg"
              alt="GitHub Logo"
              width={20}
              height={20}
              className="mr-3"
            />
            GitHub
          </a>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 flex justify-end">
        <figure className="hidden lg:block w-[300px] sm:w-[350px] md:w-[395px] h-auto transform -translate-y-8 mx-auto lg:mx-0 lg:mb-0">
          <img src="/images/hero-image.svg" alt="Hero Image" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
