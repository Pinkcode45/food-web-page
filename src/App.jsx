import React from "react";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";
import About from "./pages/about/About";
import "./style.scss"

import { Routes, Route} from "react-router-dom"



function App() {

  return (
   <>
      <Routes>
        <Route path="/home" element={<Home/>}/>   
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
    
  );
}

export default App;
