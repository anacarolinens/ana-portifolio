/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */

import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectCarousel = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef(null);

  const projects = [
    {
      title: "AVASOFT",
      subtitle: "Sistema que simplifica avaliações antropométricas.",
      description:
        "O sistema Avasoft tem como objetivo auxiliar no processo das avaliações antropométricas, coletando e armazenando dados por um período de tempo, fornecendo um resultado comparativo dos dados sobre a evolução dos alunos ao longo do tempo,com auxílio de gráficos para a visualização dos resultados.",
      image: "/images/avasoft-page.png",
      imageM: [
        "/images/avasoft-page-1.png",
        "/images/avasoft-page-2.png",
        "/images/avasoft-page-3.png",
        "/images/avasoft-page-4.png",
      ],

      technologies: [
        "/images/vue.svg",
        "/images/vite.svg",
        "images/tailwindcss.svg",
        "/images/axios.svg",
      ],
      url: "https://avasoft-landingpage.netlify.app/",
      githubLink: "https://github.com/anacarolinens",
    },
    {
      title: "Em Breve",
      subtitle: "Projeto em breve",
      description:
        "Este projeto está em desenvolvimento e será lançado em breve.",
      image: "/images/em-breve.png",
      imageM: [],
      technologies: [],
      url: "",
      githubLink: "",
    },
    {
      title: "Em Breve",
      subtitle: "Projeto em breve",
      description:
        "Este projeto está em desenvolvimento e será lançado em breve.",
      image: "/images/em-breve.png",
      imageM: [],
      technologies: [],
      url: "",
      githubLink: "",
    },
    {
      title: "Em Breve",
      subtitle: "Projeto em breve",
      description:
        "Este projeto está em desenvolvimento e será lançado em breve.",
      image: "/images/em-breve.png",
      imageM: [],
      technologies: [],
      url: "",
      githubLink: "",
    },
  ];

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 w-full px-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-none w-[351.81px] h-[378px]"
            onClick={() => handleOpenModal(project)}
          >
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              url={project.url}
              githubLink={project.githubLink}
            />
          </div>
        ))}
      </div>

      <div className="flex mt-10 space-x-4">
        <button
          onClick={scrollLeft}
          className="p-3 bg-[var(--color-bg-proj-btn)] text-[var(--color-bg-proj-hover)] rounded-full hover:bg-[var(--color-bg-proj-hover)] hover:text-[var(--color-bg-proj-btn)] duration-300 transition-transform hover:scale-115"
          aria-label="Anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="p-3 bg-[var(--color-bg-proj-btn)] text-[var(--color-bg-proj-hover)] rounded-full hover:bg-[var(--color-bg-proj-hover)] hover:text-[var(--color-bg-proj-btn)] duration-300 transition-transform hover:scale-115"
          aria-label="Próximo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectCarousel;
