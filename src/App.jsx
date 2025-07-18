import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Projects } from "./Pages/Projects/Projects";
import { Skills } from "./Pages/Skills/Skills";
import "./Styles/main.scss";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
