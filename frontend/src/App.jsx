<<<<<<< HEAD
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/index.jsx';
import Contact from './pages/contact/index.jsx';
import About from './pages/about/index.jsx';
import Service from './pages/service/index.jsx';
import Login from './pages/login/index.jsx';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
=======
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
>>>>>>> 30ac28ccfa2ed412e9fffed9e408ecf29ef8b28c

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
