import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Work from './components/Work/Work'
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Home />
        <Work />
        <Skills />
        <Projects />
      </div>
        <Footer />
    </>
  );
};

export default App;
