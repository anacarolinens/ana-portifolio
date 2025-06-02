/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */
import React from "react";
import ReactDOM from "react-dom";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-auto shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[var(--color-bg-proj-btn)] text-[var(--color-bg-proj-hover)] rounded-full hover:bg-[var(--color-bg-proj-hover)] hover:text-[var(--color-bg-proj-btn)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <section
          id="contact-modal"
          className="flex flex-col lg:flex-row items-start justify-start px-6 md:px-8 py-10"
        >
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800 uppercase mb-4">
              Contato
            </h2>
            <span className="block w-18 h-0.5 bg-[var(--color-shadow-gray)] mb-8"></span>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-prose">
              Sinta-se à vontade para entrar em contato comigo através dos
              canais abaixo.
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
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
