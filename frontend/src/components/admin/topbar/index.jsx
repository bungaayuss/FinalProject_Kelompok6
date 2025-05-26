// components/Topbar.jsx
import React from "react";

const Topbar = ({ onToggleSidebar }) => {
  return (
    <div className="topbar d-flex justify-content-between align-items-center px-4">
      <button className="btn btn-outline-primary" onClick={onToggleSidebar}>
        <i className="bi bi-list fs-4"></i>
      </button>
      <div className="input-group w-50">
        <input type="text" className="form-control" placeholder="Search here" />
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell-fill text-dark fs-5 position-relative">
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
        </i>
        <img
          src="https://via.placeholder.com/40"
          className="rounded-circle"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Topbar;
