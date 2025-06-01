import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export function SideCard1({ data }) {
  return (
    <div
      className="bg-white rounded-4 shadow-sm p-3"
      style={{ marginTop: "25px" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold text-primary m-0">Paket Terlaris</h6>
        <button
          className="btn btn-outline-primary btn-sm p-1"
          aria-label="Filter"
          type="button"
        >
          <i className="bi bi-funnel"></i>
        </button>
      </div>

      {data.map(({ paketName, percentage }) => (
        <div key={paketName} className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="fw-semibold">{paketName}</div>
            <div className="text-muted">{percentage}%</div>
          </div>
          <div
            className="progress"
            style={{ height: "6px", borderRadius: "3px" }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${percentage}%` }}
              aria-valuenow={percentage}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
