/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */
import React from "react";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-r from-[var(--color-bg-light)] to-[var(--color-bg-lighte)] backdrop-blur-md border border-[var(--color-border-gray)] py-10"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-start text-center px-4 mb-10 mt-15">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-800 uppercase mb-4">
          Projetos
        </h2>
        <span className="block w-18 h-0.5 bg-[var(--color-shadow-gray)] mb-8"></span>

        <ProjectCarousel />
      </div>
    </section>
  );
}

export default Projects;