import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./Pages/Home/Home";
import "./Styles/main.scss";
function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
