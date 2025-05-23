import { useState } from "react";
import { SiMongodb } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import "./_header.scss";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaJs,
} from "react-icons/fa";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <FaReact color="blue" />
          <FaJs color="yellow" />
          <SiMongodb color="green" />
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={() => setMenuOpen(false)}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#conhecimentos" onClick={() => setMenuOpen(false)}>
              Conhecimentos
            </a>
          </li>
          <li>
            <a href="#contato" onClick={() => setMenuOpen(false)}>
              Fale Comigo
            </a>
          </li>
        </ul>

        <div>
          <a href="">
            <FaInstagram color="purple" />
          </a>
          <a href="">
            <FaGithub color="white" />
          </a>
          <a href="">
            <FaLinkedin color="aqua" />
          </a>
        </div>
      </nav>
    </header>
  );
};
