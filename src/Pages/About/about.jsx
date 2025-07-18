import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./_about.module.scss";
import avatarDev from "../../assets/Imagens/avatarDev.png";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.aboutContainer}>
      <section className={styles.avatar} data-aos="fade-right">
        <img src={avatarDev} />
      </section>
      <section className={styles.textAbout} data-aos="fade-left">
        <h2>Sobre mim</h2>
        <p>
          Me chamo Gabriel, tenho 20 anos e sou estudante de Análise e
          Desenvolvimento de Sistemas. Sempre gostei de tecnologia, mas foi na
          programação que encontrei meu verdadeiro interesse. Meu foco principal
          é o desenvolvimento web.
          <br />
          <br /> <br />
          Tenho experiência com HTML, CSS, JavaScript, React.js, Node.js,
          MongoDB, Prisma, Git e GitHub. Estou em constante aprendizado, sempre
          buscando novos conhecimentos e experiencias.
        </p>
      </section>
    </section>
  );
};
