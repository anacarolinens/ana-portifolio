/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */
import React from "react";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  return (
    <>
      <footer className="w-full bg-gradient-to-r from-[var(--color-bg-light)] to-[var(--color-bg-lighte)] backdrop-blur-md border border-[var(--color-border-gray)] py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-base text-gray-800 uppercase mb-16">
            Ana Caroline
          </h1>

          <ul className="hidden md:flex space-x-12 text-[18px] text-gray-700 mb-12">
            <li>
              <a href="#about" className="nav-link">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projetos
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsContactOpen(true)}
                className="nav-link focus:outline-none"
              >
                Contato
              </button>
            </li>
          </ul>

          <div className="flex gap-6 mb-6">
            <a
              href="https://linkedin.com/in/anacarolinens"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-[9px] text-sm sm:text-[18px] font-normal text-white bg-[var(--color-hover-gray)] duration-300 transition-transform hover:scale-105"
            >
              <img
                src="/images/linkedin.svg"
                alt="LinkedIn Logo"
                width={20}
                height={20}
                className="mr-2"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/anacarolinens"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-[9px] text-sm sm:text-[18px] font-normal text-white bg-[var(--color-hover-gray)] duration-300 transition-transform hover:scale-105"
            >
              <img
                src="/images/github.svg"
                alt="GitHub Logo"
                width={20}
                height={20}
                className="mr-2"
              />
              GitHub
            </a>
          </div>

          <p className="text-sm text-gray-800 pt-5">
            Todos os direitos reservados. © 2025 Desenvolvido por Ana Caroline.
          </p>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Footer;
