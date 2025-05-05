/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */
import React from "react";

const ExperienceCard = ({ title, description, date }) => (
  <div className="w-66 bg-gradient-to-r from-[var(--color-bg-light)] to-[var(--color-bg-lighte)] backdrop-blur-md border border-[var(--color-border-gray)] rounded-lg shadow p-4 flex flex-col justify-between text-gray-800 h-95 pt-10 mt-16 duration-300 transition-transform hover:scale-105">
    {/* Logo */}
    <div className="flex justify-center mb-4">
      <img src="/public/images/exp.png" alt="Experience Logo" className="w-6" />
    </div>

    {/* Title */}
    <h5 className="text-lg font-normal text-black text-center mb-2">{title}</h5>

    <span className="block w-8 h-[2px] bg-black mx-auto my-2 mb-6"></span>

    {/* Description */}
    <p className="text-sm leading-relaxed text-w text-center flex-grow">
      {description}
    </p>

    {/* Date */}
    <div className="mt-4 mb-8 text-center">
      <span className="text-sm text-gray-800">{date}</span>
    </div>
  </div>
);

export default ExperienceCard;
