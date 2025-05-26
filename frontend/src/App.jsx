import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./components/about";
import Login from "./components/login";
import Register from "./components/register";
import Services from "./components/services";
import Packages from "./components/packages";

import "./App.css";

export default function App() {
  return (
    <Router>
      <header>
        <nav className="navbar">
          <div className="logo">Eventify</div>
          <div className="nav-links">
            <Link to="/">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
}
