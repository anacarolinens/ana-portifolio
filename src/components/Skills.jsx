/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */
import React from "react";

const Skills = () => {
  const allSkills = [
    { name: "HTML", img: "/images/html.svg" },
    { name: "CSS", img: "/images/css3.svg" },
    { name: "Java", img: "/images/java.svg" },
    { name: "JavaScript", img: "/images/javascript.svg" },
    { name: "Node.js", level: "Intermediário", img: "/images/nodejs.svg" },
    { name: "MySQL", img: "/images/mysql.svg" },
    { name: "PostgreSQL", img: "/images/postgresql.svg"},
    { name: "Sequelize", img: "/images/sequelize.svg" },
    { name: "Angular", img: "/images/angular.svg" },
    { name: "Vue", img: "/images/vue.svg" },
    { name: "React", img: "/images/react.svg" },
    { name: "Bootstrap", img: "/images/bootstrap.svg" },
    { name: "TailwindCss", img: "/images/tailwindcss.svg" },
    { name: "Laravel", img: "/images/laravel.svg" },
    { name: "Postman", img: "/images/postman.svg" },
    { name: "Git", img: "/images/git.svg" },
    { name: "GitHub", img: "/images/github-dark.svg" },
    { name: "Docker", img: "/images/docker.svg" },
  ];

  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-screen-xl flex flex-col justify-center items-center pt-16 pb-16 px-4 lg:px-6 overflow-hidden"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-4 z-10">
        {allSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center duration-400 transition-transform hover:scale-115"
          >
            <div className="flex items-center space-x-3 mb-2">
              <img
                src={skill.img}
                alt={`${skill.name} logo`}
                className="w-10 h-10"
              />
              <span className="text-lg font-semibold text-gray-800 uppercase">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
