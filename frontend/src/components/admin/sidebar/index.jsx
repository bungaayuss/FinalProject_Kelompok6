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
