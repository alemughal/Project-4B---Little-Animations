import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';



function RouteConfig() {
  return(
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" />
          <Route path="/" />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouteConfig;