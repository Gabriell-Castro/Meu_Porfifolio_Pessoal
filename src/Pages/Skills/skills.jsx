import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./_skills.module.scss";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiCss3, SiMongodb, SiPrisma } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import {
  FaNode,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaSass,
} from "react-icons/fa";

export const Skills = () => {
  const [description, setDescription] = useState(
    "Passe o mouse por cima das tecnologias para ver a descrição."
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techDescriptions = {
    html: "HTML é a linguagem de marcação usada para criar páginas web.",
    css: "CSS é usado para estilizar elementos HTML.",
    sass: "Sass é um pré-processador CSS com recursos extras.",
    js: "JavaScript dá interatividade às páginas web.",
    react: "React é uma biblioteca JS para interfaces reativas.",
    node: "Node.js é um ambiente para rodar JS no backend.",
    mongo: "MongoDB é um banco de dados NoSQL.",
    prisma: "Prisma é um ORM moderno para Node.js.",
    git: "Git é um sistema de controle de versão.",
    github: "GitHub é uma plataforma para hospedar código com Git.",
  };

  return (
    <section className={styles.containerSkills}>
      <h1 data-aos="fade-up">Habilidades</h1>
      <section data-aos="zoom-in">
        <ul>
          <li
            onMouseEnter={() => setDescription(techDescriptions.html)}
            onMouseLeave={() =>
              setDescription("Passe o mouse por cima das tecnologias")
            }
          >
            <AiOutlineHtml5 color="red" className={styles.iconsSkills} />
          </li>
          <li
            onMouseEnter={() => setDescription(techDescriptions.css)}
            onMouseLeave={() =>
              setDescription("Passe o mouse por cima das tecnologias")
            }
          >
            <SiCss3 color="blue" className={styles.iconsSkills} />
          </li>
          <li
            onMouseEnter={() => setDescription(techDescriptions.sass)}
            onMouseLeave={() =>
              setDescription("Passe o mouse por cima das tecnologias")
            }
          >
            <FaSass color="pink" className={styles.iconsSkills} />
          </li>
          <li
            onMouseEnter={() => setDescription(techDescriptions.js)}
            onMouseLeave={() =>
              setDescription("Passe o mouse por cima das tecnologias")
            }
          >
            <RiJavascriptFill color="yellow" className={styles.iconsSkills} />
          </li>
          <li
            onMouseEnter={() => setDescription(techDescriptions.react)}
            onMouseLeave={() =>
              setDescription("Passe o mouse por cima das tecnologias")
            }
          >
            <FaReact color="cyan" className={styles.iconsSkills} />
          </li>
          <li
            onMouseEnter={() => setDescription(techDescriptions.node)}
            onMouseLeave={() =>
              setDescription("Passe o mouse por cima das tecnologias")
            }
          >
            <FaNode color="green" className={styles.iconsSkills} />
          </li>
          <li
            onMouseEnter={() => setDescription(techDescriptions.mongo)}
            onMouseLeave={() =>
              setDescription("Passe o mouse por cima das tecnologias")
            }
          >
            <SiMongodb color="green" className={styles.iconsSkills} />
          </li>
          <li
            onMouseEnter={() => setDescription(techDescriptions.prisma)}
            onMouseLeave={() =>
              setDescription("Passe o mouse por cima das tecnologias")
            }
          >
            <SiPrisma color="purple" className={styles.iconsSkills} />
          </li>
          <li
            onMouseEnter={() => setDescription(techDescriptions.git)}
            onMouseLeave={() =>
              setDescription("Passe o mouse por cima das tecnologias")
            }
          >
            <FaGitAlt color="orange" className={styles.iconsSkills} />
          </li>
          <li
            onMouseEnter={() => setDescription(techDescriptions.github)}
            onMouseLeave={() =>
              setDescription("Passe o mouse por cima das tecnologias")
            }
          >
            <FaGithubSquare color="black" className={styles.iconsSkills} />
          </li>
        </ul>

        <p data-aos="fade-up">{description}</p>
      </section>
    </section>
  );
};
