import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Work from './components/Work/Work'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Home />
        <Work />
      </div>
    </>
  );
};

export default App;
