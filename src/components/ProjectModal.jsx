/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */

import React from "react";
import ReactDOM from "react-dom";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-lg"
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

        <div className="p-16 overflow-auto max-h-[90vh]">
          <h2 className="text-5xl text-gray-800 mb-2 mt-8">{project.title}</h2>
          <p className="text-[var(--color-bg-sub-gray)] text-1x2 mb-4">
            {project.subtitle}
          </p>
          <span className="block w-16 h-0.5 bg-[var(--color-shadow-gray)] mb-8"></span>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            {project.technologies?.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Tecnologia ${index + 1}`}
                className="h-8 w-auto duration-300 transition-transform hover:scale-115"
              />
            ))}
          </div>

          <p className="text-gray-700 font-semibold mb-2">
            Descrição do projeto:
          </p>
          <p className="text-gray-700 mb-8">{project.description}</p>

          {project.imageM && Array.isArray(project.imageM) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 mt-6">
              {project.imageM.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${project.title} imagem ${index + 1}`}
                  className="w-full h-auto rounded-xl mb-4 border border-[var(--color-border-gray)] duration-300 transition-transform hover:scale-105"
                />
              ))}
            </div>
          )}

          <div className="flex justify-center space-x-4">
            <a
              href={project.url}
              target="_blank"
              className="flex items-center px-6 py-3 rounded-[9px] text-sm sm:text-[18px] font-normal text-white bg-[var(--color-hover-gray)] duration-300 transition-transform hover:scale-105"
            >
              <img
                src="/images/link.svg"
                alt="Link Logo"
                width={20}
                height={20}
                className="mr-3"
              />
              Ver o projeto
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              className="flex items-center px-12 py-3 rounded-[9px] text-sm sm:text-[18px] font-normal text-white bg-[var(--color-hover-gray)] duration-300 transition-transform hover:scale-105"
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
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;