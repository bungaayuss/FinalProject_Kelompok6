import { Link } from "react-router-dom";

export default function Header() {
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
                WebkitBackdropFilter: "blur(8px) brightness(1.2)" 
            }}
        >
            <div style={{ paddingLeft: "20px" }}>
                <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
                    <img src="/Event.png" alt="" style={{ height: "60px", marginRight: "16px" }} />
                </a>
            </div>

            <ul className="nav ms-auto me-3 d-flex align-items-center">
                <li>
                    <Link to={"/"} className="nav-link px-2" style={{ color: "#1C57BC", fontWeight: "bold" }}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"} className="nav-link px-2" style={{ color: "#1C57BC", fontWeight: "bold" }}>About</Link>
                </li>
                <li>
                    <Link to={"/service"} className="nav-link px-2" style={{ color: "#1C57BC", fontWeight: "bold" }}>Service & Package</Link>
                </li>
                <li>
                    <Link to={"/contact"} className="nav-link px-2" style={{ color: "#1C57BC", fontWeight: "bold" }}>Contact</Link>
                </li>
            </ul>

            <div style={{ paddingRight: "20px" }}>
                <Link
                    to="/login"
                    className="btn btn-outline-primary"
                    style={{ background: "#1C57BC", color: "#fff", borderColor: "#1C57BC", marginLeft: "10px", fontWeight: "bold" }}
                >
                    Login
                </Link>
            </div>
        </header>
    );
}