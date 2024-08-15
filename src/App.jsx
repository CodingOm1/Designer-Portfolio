import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Home />
        
      </div>
    </>
  );
};

export default App;
