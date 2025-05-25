import React from "react";
import "../styles/services.css";

export default function Services() {
  return (
    <div className="services-container">
      <header className="services-header">
        <div className="logo">EVENT PORA</div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services & Package</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <main className="services-main">
        <section className="services-section">
          <h1>Layanan Kami</h1>
          <p>
            Event Pora menyediakan berbagai layanan profesional untuk acara
            Anda, termasuk dekorasi, dokumentasi, katering, dan perencanaan
            acara.
          </p>

          <div className="services-list">
            <div className="service-item">
              <img src="/images/dekorasi.jpg" alt="Dekorasi" />
              <h3>Dekorasi</h3>
              <p>Desain estetika yang elegan dan sesuai tema acara Anda.</p>
            </div>

            <div className="service-item">
              <img src="/images/dokumentasi.jpg" alt="Dokumentasi" />
              <h3>Dokumentasi</h3>
              <p>Fotografi dan videografi berkualitas untuk kenangan abadi.</p>
            </div>

            <div className="service-item">
              <img src="/images/katering.jpg" alt="Katering" />
              <h3>Katering</h3>
              <p>Makanan dan minuman premium sesuai pilihan menu Anda.</p>
            </div>

            <div className="service-item">
              <img src="/images/planner.jpg" alt="Planner" />
              <h3>Event Planner</h3>
              <p>
                Perencanaan acara dari awal hingga akhir agar berjalan lancar.
              </p>
            </div>
          </div>
        </section>

        <section className="packages-section">
          <h2>Paket Kami</h2>
          <div className="package-list">
            <div className="package-card">
              <h4>Paket Silver</h4>
              <ul>
                <li>Dekorasi standar</li>
                <li>Dokumentasi 1 kamera</li>
                <li>50 porsi katering</li>
              </ul>
            </div>

            <div className="package-card">
              <h4>Paket Gold</h4>
              <ul>
                <li>Dekorasi lengkap</li>
                <li>Dokumentasi 2 kamera + drone</li>
                <li>100 porsi katering</li>
              </ul>
            </div>

            <div className="package-card">
              <h4>Paket Platinum</h4>
              <ul>
                <li>Dekorasi premium + photobooth</li>
                <li>Full dokumentasi</li>
                <li>200 porsi katering</li>
                <li>MC & hiburan live</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
