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
      className="relative mx-auto w-full max-w-screen-xl flex items-start justify-center px-4 md:px-6 py-0 mb-12"
    >
      <figure className="hidden lg:block lg:absolute lg:left-0 lg:top-10 transform -translate-x-8 w-[100px] sm:w-[150px] md:w-[250px] h-auto mx-auto">
        <img src="/images/about-image.svg" alt="About Image" />
      </figure>
      <div className="z-10 flex flex-col items-center text-center px-4 lg:px-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-prose transform translate-x-4 lg:translate-x-8">
        <img
          src="/images/logo.svg"
          alt="Ana Caroline Logo"
          className="w-12 h-auto mb-8"
        />

        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-800 uppercase">
          Quem sou eu
        </h2>
        <span className="block w-18 h-0.5 bg-[var(--color-shadow-gray)] mt-2 mb-12"></span>

        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
          Desenvolvedora Full-Stack, graduada em Sistemas de Informação e
          técnica em Informática, com experiência em suporte técnico de TI e
          capacitação em Desenvolvimento Web Full-Stack pelo{" "}
          <a
            href="https://webacademy.ufac.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            WebAcademy
          </a>
          . Minha trajetória me permitiu ter conhecimento tanto da
          infraestrutura de TI quanto as principais tecnologias de front-end e
          back-end, garantindo soluções completas e eficientes.
        </p>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Movida por desafios, combino minhas habilidades técnicas a uma
          abordagem analítica para resolver problemas e aprimorar a experiência
          do usuário. Estou em busca de novas oportunidades em desenvolvimento
          de software, onde possa aplicar meu conhecimento e boas ideias em
          projetos incríveis e inovadores.
        </p>
      </div>
    </section>
  );
};

export default About;
