// components/SummaryPanel.jsx
import React from "react";

const progressCard = () => {
  return (
    <>
      <div className="card-stats bg-white mb-3">
        <h6 className="mb-2">Progress Penjualan Tiket</h6>
        <div className="progress mb-2" style={{ height: "20px" }}>
          <div className="progress-bar bg-success" style={{ width: "70%" }}>
            70%
          </div>
        </div>
        <small>70 dari 100 tiket terjual</small>
      </div>

      <div className="card-stats bg-white mb-3">
        <h6 className="mb-2">Status Pendaftaran EO</h6>
        <span className="badge bg-primary">4 EO menunggu konfirmasi</span>
      </div>

      <div className="card-stats bg-white">
        <h6 className="mb-2">Notifikasi</h6>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Pengguna baru mendaftar</li>
        </ul>
      </div>
    </>
  );
};

export default progressCard;
