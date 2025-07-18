import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./_projects.module.scss";

export const Projects = () => {
  const [numProjects, setNumProjects] = useState(3);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    { name: "Em breve" },
    { name: "Em breve" },
    { name: "Em breve" },
    { name: "Em breve" },
    { name: "Em breve" },
    { name: "Em breve" },
    { name: "Em breve" },
    { name: "Em breve" },
    { name: "Em breve" },
  ];

  const renderProjects = () => {
    return projects.slice(0, numProjects).map((item, index) => (
      <li key={index} data-aos="zoom-in-up">
        <p>{item.name}</p>
      </li>
    ));
  };

  const addProjects = () => {
    setNumProjects(projects.length);
  };

  const removeProjects = () => {
    setNumProjects(3);
  };

  return (
    <>
      <section className={styles.containerProjects}>
        <h1 data-aos="fade-up">Projetos</h1>
        <ul className={styles.listCardsProjects}>{renderProjects()}</ul>

        {numProjects < projects.length && (
          <button onClick={addProjects} data-aos="fade-up">
            Veja mais...
          </button>
        )}
        {numProjects >= projects.length && (
          <button onClick={removeProjects} data-aos="fade-up">
            Veja menos...
          </button>
        )}
      </section>
    </>
  );
};
