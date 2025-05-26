// components/StatCard.jsx
import React from "react";

const StatCard = ({ icon, title, value, note }) => {
  return (
    <div className="card-stats bg-white mb-4">
      <div className="icon-circle mb-2">
        <i className={`bi bi-${icon}`}></i>
      </div>
      <h6>{title}</h6>
      <h4>{value}</h4>
      <small className="text-success">{note}</small>
    </div>
  );
};

export default StatCard;
