import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.css"; 
import Home from "./pages/Home"; 
import Tools from "./pages/Tools"; 
import Contact from "./pages/Contact"; 

const App: React.FC = () => {
  return (
    <div> 
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/contact" element={<Contact />} />
        </Routes> 

    </div>
  );
};

export default App;
