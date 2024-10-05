import React from "react";
import Nav from "./componants/nav";
import Home from "./componants/homePage";
import Skills from "./componants/Skills/Skills";
import About from "./componants/about";
import Contact from "./componants/Contect";
import Footer from "./componants/footer"
import "./App.css";

function App() {
  return (
    <>
      <Nav/>
      <Home />
      <About/>
      <Skills />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
