<<<<<<< HEAD
import React, { useState } from "react";

export default function Sidebar() {
    return (
        <>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600&display=swap');
                `}
            </style>
            <aside
                style={{
                    width: "250px",
                    height: "100vh",
                    background: "#034F75",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "'Urbanist', sans-serif",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    zIndex: 1000,
                    borderRadius: "22px"
                }}
            >
                {/* Logo dan Judul */}
                <div style={{ display: "flex", alignItems: "center", padding: "24px 20px 16px 20px", marginBottom: "32px" }}>
                    <img src="/Event.png" alt="Event" style={{ height: "40px", marginRight: "12px" }} />
                    <span style={{ fontWeight: 600, fontSize: "20px" }}>Event Pora</span>
                </div>

                {/* Menu */}
                <nav style={{ flex: 1 }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <SidebarItem iconClass="fa-solid fa-house" text="Dashboard" />
                        <SidebarItem iconClass="fa-solid fa-file" text="Kelola data" />
                        <SidebarItem iconClass="fa-solid fa-credit-card" text="Transaksi" />
                        <SidebarItem iconClass="fa-solid fa-qrcode" text="Event" />
                        <SidebarItem iconClass="fa-solid fa-gear" text="Settings" />
                    </ul>
                </nav>

                {/* Log Out di bawah */}
                <div style={{ margin: "20px", listStyle: "none", padding: 0 }}>
                    <SidebarItem iconClass="fa-solid fa-right-from-bracket" text="Log Out" />
                </div>
            </aside>
        </>
    );
}

// Komponen SidebarItem
function SidebarItem({ iconClass, text }) {
    const [hover, setHover] = useState(false);

    return (
        <li
            style={{
                marginBottom: "8px",
                borderRadius: "44px",
                transition: "background 0.2s",
                cursor: "pointer"
            }}
        >
            <a
                href="#"
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 16px",
                    color: hover ? "#034F75" : "#fff",
                    textDecoration: "none",
                    borderRadius: "44px",
                    background: hover ? "#fff" : "transparent",
                    fontWeight: 500,
                    transition: "all 0.2s",
                    fontFamily: "'Urbanist', sans-serif"
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <i className={iconClass} style={{ fontSize: "20px", marginRight: "16px" }}></i>
                <span>{text}</span>
            </a>
        </li>
    );
}
=======
import React from "react";

export default function Sidebar({ collapsed }) {
  return (
    <div className={`sidebar p-3 ${collapsed ? "collapsed" : ""}`} id="sidebar">
      <div className="d-flex align-items-center mb-4">
        <img src="https://via.placeholder.com/40" className="me-2" alt="Logo" />
        <span className="logo-text fs-5 fw-bold">Event Pora</span>
      </div>
      {[
        { icon: "house", label: "Dashboard" },
        { icon: "folder2-open", label: "Kelola Data" },
        { icon: "cash-coin", label: "Transaksi" },
        { icon: "calendar2-event", label: "Event" },
        { icon: "gear", label: "Settings" },
        { icon: "box-arrow-right", label: "Log Out", mt: true },
      ].map((item, i) => (
        <a
          href="#"
          key={i}
          className={`d-flex align-items-center mb-2 ${item.mt ? "mt-5" : ""}`}
        >
          <i className={`bi bi-${item.icon} me-2`}></i>
          <span className="menu-text">{item.label}</span>
        </a>
      ))}
    </div>
  );
}
>>>>>>> 30ac28ccfa2ed412e9fffed9e408ecf29ef8b28c
