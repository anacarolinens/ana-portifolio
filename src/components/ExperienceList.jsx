/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */

import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "SEJUSP - Estágio em Suporte",
    description: `Atividades como manutenção e reparo de computadores, suporte a aplicativos desktop,
atendimento ao cliente, instalação de software e hardware, suporte técnico e documentação adequada.`,
    date: "2020 - 2021",
  },
  {
    title: "MPF - Estágio em Suporte",
    description: `Atendimento ao cliente, instalação de software e hardware, suporte técnico, manutenção
corretiva e preventiva de computadores e documentação.`,
    date: "2021 - 2023",
    img: "/public/images/Logo_MPF.png"
  },
  {
    title: "WebAcademy - Hands‑On",
    description: `Experiência com metodologias ágeis (Scrum, Planning Poker, Kanban). 
Habilidades em JavaScript, Java, Node.js, Angular, Spring Boot. Projeto real de automação de agendamento.`,
    date: "2023",
  },
  {
    title: "SDTI - Estágio em Dev Web Jr.",
    description: `Criação de páginas web com Laravel, VueJS, TailwindCSS, HTML, CSS, JavaScript, Git/GitHub e Docker.`,
    date: "2023 - 2025",
  },
];

const ExperienceList = () => (
  <section className="relative mx-auto w-full max-w-screen-xl flex flex-wrap items-stretch justify-center gap-4 px-4 md:px-6 py-10">
    {experiences.map((exp) => (
      <div key={exp.id} className="flex-shrink-0">
        <ExperienceCard
          img={exp.img}
          title={exp.title}
          subtitle={exp.subtitle}
          description={exp.description}
          date={exp.date}
        />
      </div>
    ))}
  </section>
);
export default ExperienceList;
