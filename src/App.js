import React from "react";
// import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Career from "./pages/career";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";

function App() {
  return (
    <Navbar />
    //     <Router>
    //       <Navbar />
    //       <Routes>
    //         <Route path="/" exact component={Home} />
    //         <Route path="/about" component={About} />
    //         <Route path="/career" component={Career} />
    //         <Route path="/contact" component={Contact} />
    //         <Route path="/portfolio" component={Portfolio} />
    //         <Route path="/services" component={Services} />
    //       </Routes>
    //     </Router>/
  );
}

export default App;
