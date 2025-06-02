/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */

import React from "react";

const ProjectCard = ({ title, subtitle, image, onclick }) => {
  return (
    <div
      className="bg-white bg-cover bg-center rounded-xl p-4 shadow flex flex-col justify-between h-full"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex-1" />
      <div className="flex justify-between items-end mt-4 bg-white/70 p-2 rounded-md">
        <div className="text-left">
          <h3 className="text-sm text-gray-500">{title}</h3>
          <p className="text-md font-medium text-gray-900 mt-1">{subtitle}</p>
        </div>
        <button
          onClick={onclick}
          className="bg-[var(--color-hover-gray)] duration-300 transition-transform hover:scale-115 p-3 rounded-full ml-4"
          aria-label="Ver mais"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
