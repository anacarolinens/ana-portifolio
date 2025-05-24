/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/**
 * 
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceList from "./components/ExperienceList";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceList />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
};
export default App;