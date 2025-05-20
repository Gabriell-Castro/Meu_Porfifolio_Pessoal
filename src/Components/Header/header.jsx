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

        {/* Botão hambúrguer */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu de navegação */}
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="#sobre">Sobre Mim</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#conhecimentos">Conhecimentos</a>
          </li>
          <li>
            <a href="#contato">Fale Comigo</a>
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
