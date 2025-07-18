import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiWorld } from "react-icons/bi";
import imgAvatar from "../../assets/Imagens/avatar-home.png";
import styles from "./_home.module.scss";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleRedirect = () => {
    window.open("https://meu-linktree-mu.vercel.app/", "_blank");
  };

  return (
    <>
      <section className={styles.homeContainer}>
        <section data-aos="fade-right">
          <div>
            <h5>
              HELLO WORLD <BiWorld />
            </h5>
            <h1>Gabriel Castro</h1>
            <p>Desenvolvedor Front-End</p>
            <button onClick={handleRedirect}>FALE COMIGO</button>
          </div>
        </section>

        <section data-aos="fade-left">
          <img src={imgAvatar} />
        </section>
      </section>
    </>
  );
};
