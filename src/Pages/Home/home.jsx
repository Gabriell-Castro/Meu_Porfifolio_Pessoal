import React from "react";
import { BiWorld } from "react-icons/bi";
import imgAvatar from "../../assets/Imagens/avatar-home.png";
import styles from "./_home.module.scss";

export const Home = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <section>
          <div>
            <h5>
              HELLO WORLD <BiWorld />
            </h5>
            <h1>Gabriel Castro</h1>
            <p>Desenvolvedor Front-End</p>
            <button>FALE COMIGO</button>
          </div>
        </section>
        <section>
          <img src={imgAvatar} />
        </section>
      </section>
    </>
  );
};
