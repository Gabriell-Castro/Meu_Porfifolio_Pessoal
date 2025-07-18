import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/about";
import { Projects } from "./Pages/Projects/Projects";
import { Skills } from "./Pages/Skills/skills";
import "./Styles/main.scss";
import { Footer } from "./Components/Header/Footer/footer";
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
