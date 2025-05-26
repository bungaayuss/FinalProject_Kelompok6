<h1>test</h1>;
// components/DashboardTable.jsx
import React from 'react';

const DashboardTable = () => {
  return (
    <div className="card-stats bg-white">
      <h5 className="mb-3">Daftar Event Terbaru</h5>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Nama Event</th>
              <th>Tanggal</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Workshop Design</td>
              <td>24 Mei 2025</td>
              <td><span className="badge bg-success">Aktif</span></td>
              <td><button className="btn btn-sm btn-outline-primary">Detail</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
