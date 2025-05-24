import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="relative flex items-center">
      {/* Desktop links */}
      <ul className="hidden md:flex items-center space-x-6 text-[18px] text-gray-700">
        <li>
          <a href="#sobre" className="nav-link">
            Sobre mim
          </a>
        </li>
        <li>
          <a href="#projetos" className="nav-link">
            Projetos
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contato
          </a>
        </li>

        <li>
          <a
            href="#resume"
            className="inline-flex items-center px-6 py-2 rounded-[9px] text-[18px] font-normal text-white bg-[var(--color-hover-gray)] transform transition-transform duration-300 hover:scale-115"
          >
            <img
              src="/images/download.svg"
              alt="Download Icon"
              width={20}
              height={20}
              className="mr-3 inline-block"
            />
            Baixar Currículo
          </a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-2 focus:outline-none text-gray-600"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {open && (
        <ul className="absolute top-full right-4 mt-2 w-48 bg-white rounded-[20px] overflow-hidden shadow-lg md:hidden text-gray-700">
          <li className="border-gray-200">
            <a
              href="#about"
              className="block px-8 py-4 hover:bg-[var(--color-bg-light)] transition"
            >
              Sobre
            </a>
          </li>
          <li className="border-gray-200">
            <a
              href="#projects"
              className="block px-8 py-4 hover:bg-[var(--color-bg-light)] transition"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-8 py-4 hover:bg-[var(--color-bg-light)] transition"
            >
              Contato
            </a>
          </li>
          <li className="border-t border-gray-200 px-4 py-4">
            <a
              href="/files/curriculo-ana-caroline.pdf"
              download="curriculo_ana_caroline.pdf"
              className="inline-flex items-center px-2 py-3 rounded-[9px] text-white bg-[var(--color-hover-gray)] transform transition-transform duration-300 hover:scale-115"
            >
              <img
                src="/images/download.svg"
                alt="Ícone de download"
                width={20}
                height={20}
                className="mr-3 inline-block"
              />
              Baixar Currículo
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
