import { Link } from "react-router-dom";
import "../../../styles/header.css";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg bg-white fixed-top border-bottom shadow-sm">
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center fw-bold"
          style={{ color: "#014AB0" }}
        >
          <img
            src="/Event.png"
            alt="Logo"
            style={{ height: "60px", marginRight: "6px" }}
          />
          Event Pora
        </Link>

        {/* Navbar content */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link nav-link-custom">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link nav-link-custom">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link nav-link-custom">
                Service & Package
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link nav-link-custom">
                Contact
              </Link>
            </li>
          </ul>

          {/* Register & Login */}
          <Link
            to="/login"
            className="btn"
            style={{
              backgroundColor: "#014AB0",
              color: "#fff",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="btn me-2"
            style={{
              border: "2px solid #014AB0",
              color: "#014AB0",
              backgroundColor: "transparent",
            }}
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
