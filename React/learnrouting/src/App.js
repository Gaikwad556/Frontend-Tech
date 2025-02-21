import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>

      <Link to="/">Home</Link><br/><br/>
      <Link to="/about">About</Link><br/><br/>
      <Link to="/contact">Contact</Link><br/><br/>
    </div>
  )
}

export default App;
