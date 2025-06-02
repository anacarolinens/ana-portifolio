# 👩‍💻 Ana Caroline – Portfólio Pessoal

*Apresentando meus projetos, experiências e contatos em um site moderno, responsivo e desenvolvido com tecnologias atuais.*  


## 📝 Descrição

Este repositório contém o meu **portfólio pessoal**, construído com **React** e **Vite**, e estilizado com **Tailwind CSS**. O objetivo principal é:

  - Exibir meus projetos e experiências de forma organizada e visivelmente atraente.
  - Ser 100% responsivo, garantindo ótima usabilidade em dispositivos móveis, tablets e desktops.
  - Facilitar a comunicação por meio de links para redes sociais, e-mail e outros canais de contato.

---

## 🛠️ Tecnologias Utilizadas

- **React**  
  Biblioteca JavaScript para construção de interfaces de usuário reativas.  
  [Site oficial](https://react.dev/)

- **Vite**  
  Ferramenta moderna de build e bundling, otimizada para rapidez no desenvolvimento.  
  [Site oficial](https://vitejs.dev/)

- **Tailwind CSS**  
  Framework utilitário CSS-first para estilização rápida e customizável.  
  [Site oficial](https://tailwindcss.com/)

- **ReactDOM**  
  Utilizado para renderizar o modal de contato em uma porta (`portal`) no DOM. 
  [Documentação](https://react.dev/reference/react-dom/createPortal)

---

## ⚙️ Funcionalidades

1. **Layout Responsivo**  
  - Design adaptável para diferentes tamanhos de tela (mobile, tablet, desktop).  
  - Menu de navegação colapsável (toggle) em dispositivos menores.

2. **Seção “Sobre Mim”**  
  - Descrição profissional, formação e habilidades em destaque.  
  - Link para “WebAcademy” com hover sublinhado, mantendo a cor padrão.

3. **Seção de Projetos**  
  - Cartões ou cards que exibem imagem, título, breve descrição e tecnologias utilizadas.  
  - Botão que abre modal com detalhes completos de cada projeto (descrição mais extensa, screenshots e links).

4. **Seção de Contato (Modal)**  
  - Ícones de e-mail, LinkedIn, GitHub e Discord com hover e efeitos de escala.  
  - Modal de contato acionável via Navbar e Footer, com portal (`ReactDOM.createPortal`).

5. **Download de Currículo**  
  - Botão destacado para baixar o PDF do currículo diretamente do repositório.

6. **Estilo Limpo e Moderno**  
  - Uso de cores neutras e tipografia legível (text-gray-600, text-gray-800, etc.).  
  - Espaçamento consistente (padding, margin) e bordas arredondadas.

---

## 🔗 Demonstração

> **URL do Deploy:**  
> [Ver Portfólio Online](https://anacarolinedev.netlify.app/)

---

## 🚀 Instalação e Execução

Siga os passos abaixo para clonar o repositório e executar localmente:

1. **Clone este repositório**  
  ```bash
  git clone https://github.com/seu-usuario/ana-portfolio.git
  cd ana-portfolio
  ```

2. **Instale as dependências**  
  ```bash
  npm install

# ou, se preferir Yarn:
# yarn install

  ```

3. **Inicie o servidor de desenvolvimento**  
  ```bash
  npm run dev
# ou, se preferir Yarn:
# yarn dev

  ```

4. **Abra no navegador**
  Acesse `http://localhost:5173` para visualizar o portfólio.
---

## 📂 Estrutura de Pastas

```plaintext
ana-portfolio/
├── public/                # Arquivos públicos (favicon, imagens, etc.)
├── src/                   # Código-fonte do projeto
│   ├── components/        # Componentes reutilizáveis (Navbar, Footer, etc.)
│   │ ├── About.jsx
│   │ ├── ContactModal.jsx
│   │ ├── ExperienceCard.jsx
│   │ ├── ExperienceList.jsx
│   │ ├── Footer.jsx
│   │ ├── Header.jsx
│   │ ├── Hero.jsx
│   │ ├── Navbar.jsx
│   │ ├── ProjectCard.jsx
│   │ ├── ProjectCarousel.js
│   │ ├── ProjectModal.jsx
│   │ ├── Project.jsx
│   │ └── Skills.jsx
│   ├── App.jsx            # Componente principal do React
│   ├── index.css          # Estilos globais (importa Tailwind CSS)
│   └── main.jsx           # Ponto de entrada do React 
├── gitignore              # Arquivo para ignorar arquivos no Git
├── eslint.json            # Configuração do ESLint para linting de código
├── index.html             # HTML principal do projeto
├── LICENSE                # Licença do projeto (Apache License 2.0)
├── package-lock.json      # Lockfile do npm para dependências
├── package.json           # Dependências e scripts do projeto
├── tailwind.config.js     # Configuração do Tailwind CSS
├── README.md              # Documentação do projeto
└── vite.config.js         # Configuração do Vite
```
---

## 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
Para contribuir:
1. Fork este repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.
---

## 📜 Licença
> Este projeto está licenciado sob a licença Apache License 2.0. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
---

## 👤 Autor e Contato

Ana Caroline
- **GitHub:** [anacarolinens](https://github.com/anacarolinens)  
- **LinkedIn:** [anacarolinens](https://linkedin.com/in/anacarolinens)  
- **E-mail:** <caroline.ana.n.s@gmail.com>  
- **Discord:** [523169642966155264](https://discord.com/users/523169642966155264)

--- 
> Sinta-se à vontade para entrar em contato para colaborações, feedback ou apenas para trocar ideias sobre desenvolvimento web!
> Obrigada por visitar meu portfólio! Espero que goste do resultado e fique à vontade para explorar outros projetos.
> Se tiver alguma dúvida ou sugestão, não hesite em me contatar.
> Desenvolvido com ❤️ por Ana Caroline – © 2025.

