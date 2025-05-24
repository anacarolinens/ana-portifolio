/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-screen-xl flex flex-col lg:flex-row items-start justify-start px-4 md:px-6 py-10 mb-12"
    >
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800 uppercase mb-4">
          Contato
        </h2>
        <span className="block w-18 h-0.5 bg-[var(--color-shadow-gray)] mb-8"></span>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-prose">
          Sinta-se à vontade para entrar em contato comigo através dos canais
          abaixo.
        </p>
        <div className="flex space-x-4">
          <a href="mailto:caroline.ana.n.s@gmail.com" className="block">
            <img
              src="/public/images/gmail.svg"
              alt="Gmail"
              className="w-12 h-12 rounded-full hover:opacity-80 duration-300 transition-transform hover:scale-115"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anacarolinens/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="/public/images/linkedin-blue.svg"
              alt="LinkedIn"
              className="w-12 h-12 rounded-full hover:opacity-80 duration-300 transition-transform hover:scale-115"
            />
          </a>
          <a
            href="https://github.com/anacarolinens"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="/public/images/github-dark.svg"
              alt="GitHub"
              className="w-12 h-12 rounded-full hover:opacity-80 duration-300 transition-transform hover:scale-115"
            />
          </a>
          <a
            href="https://discord.com/users/523169642966155264"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="/public/images/discord.svg"
              alt="Discord"
              className="w-12 h-12 rounded-full hover:opacity-80 duration-300 transition-transform hover:scale-115"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
