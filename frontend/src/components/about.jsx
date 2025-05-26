import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <div className="logo">EVENT PORA</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Service & Package</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <div className="about-content">
        <h1 className="about-title">EVENT ORGANIZER</h1>
        <p className="about-description">
          Event Pora adalah Event Organizer yang berlokasi di Bangkalan, Madura.
          Kami melayani jasa penyelenggaraan acara seperti pernikahan, ulang tahun,
          seminar, dan lainnya. Dengan tim profesional dan pengalaman lebih dari 5 tahun,
          kami siap membantu mewujudkan acara impian Anda menjadi nyata.
        </p>
        <div className="about-logo">
          <img src="/images/eventpora-logo.png" alt="Event Pora Logo" />
        </div>
        <div className="about-icons">
          <img src="/images/icon-creative.png" alt="Creative" />
          <img src="/images/icon-team.png" alt="Team" />
          <img src="/images/icon-love.png" alt="Love" />
        </div>
      </div>
    </div>
  );
}