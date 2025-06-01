import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ isLoggedIn, username, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    if (onLogout) onLogout();
    navigate("/login");
  };

  return (
    <header
      className="d-flex align-items-center justify-content-between py-3 border-bottom"
      style={{
        background: "rgb(179,199,230)",
        fontFamily: "'Poppins', sans-serif",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 101,
        backdropFilter: "blur(8px) brightness(1.2)",
        WebkitBackdropFilter: "blur(8px) brightness(1.2)",
      }}
    >
      {/* Logo */}
      <div style={{ paddingLeft: "20px" }}>
        <Link to="/" className="d-inline-flex align-items-center text-decoration-none">
          <img src="/Event.png" alt="Logo" style={{ height: "60px", marginRight: "16px" }} />
        </Link>
      </div>

      {/* Navigation */}
      <ul className="nav ms-auto me-3 d-flex align-items-center">
        <li><Link to="/" className="nav-link px-2" style={{ color: "#1C57BC", fontWeight: "bold" }}>Home</Link></li>
        <li><Link to="/about" className="nav-link px-2" style={{ color: "#1C57BC", fontWeight: "bold" }}>About</Link></li>
        <li><Link to="/service" className="nav-link px-2" style={{ color: "#1C57BC", fontWeight: "bold" }}>Service & Package</Link></li>
        <li><Link to="/contact" className="nav-link px-2" style={{ color: "#1C57BC", fontWeight: "bold" }}>Contact</Link></li>
      </ul>

      {/* Login / Profile */}
      <div className="d-flex align-items-center" style={{ paddingRight: "20px" }}>
        {isLoggedIn ? (
          <>
            <img
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              alt="User"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px",
              }}
            />
            <span className="me-3 fw-bold text-primary">{username}</span>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline-primary"
            style={{
              background: "#1C57BC",
              color: "#fff",
              borderColor: "#1C57BC",
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
