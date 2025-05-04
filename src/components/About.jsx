/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * Components
 */
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-screen-xl min-h-screen flex items-start justify-center pt-2 px-4 md:px-6"
    >
      <figure className="hidden lg:block lg:absolute lg:left-0 lg:top-10  w-[100px] sm:w-[150px] md:w-[250px] h-auto">
        <img src="/public/images/about-image.svg" alt="About Image" />
      </figure>
      <div className="z-10 flex flex-col items-center text-center px-4 lg:px-0 w-full lg:max-w-2xl  transform lg:-translate-x-6 lg:ml-55">
        <img
          src="/images/logo.svg"
          alt="Ana Caroline Logo"
          className="w-12 h-auto mb-8"
        />

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800 uppercase ">
          Quem sou eu
        </h2>
        <span className="block w-18 h-0.5 bg-[var(--color-shadow-gray)] mt-2 mb-12 "></span>

        <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
          Desenvolvedora Full-Stack, graduada em Sistemas de Informação e técnica em Informática,
          com sólida experiência em suporte técnico de TI e formação em
          Desenvolvimento Web Full-Stack pelo WebAcademy. Minha trajetória me
          permitiu ter conhecimento tanto da infraestrutura de TI quanto as principais
          tecnologias de front‑end e back‑end, garantindo soluções completas e
          eficientes.
        </p>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Movida por desafios, combino minhas habilidades técnicas a uma
          abordagem analítica para resolver problemas e aprimorar a experiência
          do usuário. Estou em busca de novas oportunidades em desenvolvimento
          de software, onde possa aplicar meu conhecimento e boas ideias em projetos incriveis e
          inovadores.
        </p>
      </div>
    </section>
  );
};

export default About;