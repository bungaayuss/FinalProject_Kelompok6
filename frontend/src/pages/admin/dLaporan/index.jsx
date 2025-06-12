import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/topbar";

export default function LaporanKonfirmasi() {
  const [dataKonfirmasi, setDataKonfirmasi] = useState([
    {
      transaksiId: 1,
      image: "https://via.placeholder.com/100x100.png?text=Bukti+1",
      paymentDate: "2025-06-10",
      amount: 3000000,
      status: "Menunggu Verifikasi",
      customerName: "Budi Santoso",
      adminName: "Admin A",
    },
    {
      transaksiId: 2,
      image: "https://via.placeholder.com/100x100.png?text=Bukti+2",
      paymentDate: "2025-06-11",
      amount: 20000000,
      status: "Terverifikasi",
      customerName: "Sari Dewi",
      adminName: "Admin B",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updated = dataKonfirmasi.map((item) =>
      item.transaksiId === id ? { ...item, status: newStatus } : item
    );
    setDataKonfirmasi(updated);
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar />
        <div className="p-4">
          <h5 className="fw-bold text-primary mb-4">Laporan Konfirmasi Pembayaran</h5>
          <div className="bg-white rounded-4 shadow-sm p-4">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Transaksi ID</th>
                    <th>Bukti Pembayaran</th>
                    <th>Tanggal Pembayaran</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Nama Customer</th>
                    <th>Nama Admin</th>
                    <th>Ubah Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dataKonfirmasi.length > 0 ? (
                    dataKonfirmasi.map((item) => (
                      <tr key={item.transaksiId}>
                        <td>{item.transaksiId}</td>
                        <td>
                          <img
                            src={item.image}
                            alt={`Bukti ${item.transaksiId}`}
                            style={{ width: "80px", borderRadius: "10px" }}
                          />
                        </td>
                        <td>{item.paymentDate}</td>
                        <td>{`Rp ${item.amount.toLocaleString()}`}</td>
                        <td>
                          <span
                            className={`badge ${
                              item.status === "Terverifikasi"
                                ? "bg-success"
                                : item.status === "Ditolak"
                                ? "bg-danger"
                                : "bg-warning text-dark"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td>{item.customerName}</td>
                        <td>{item.adminName}</td>
                        <td>
                          <select
                            className="form-select form-select-sm"
                            value={item.status}
                            onChange={(e) =>
                              handleStatusChange(item.transaksiId, e.target.value)
                            }
                          >
                            <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                            <option value="Terverifikasi">Terverifikasi</option>
                            <option value="Ditolak">Ditolak</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center text-muted">
                        Tidak ada data konfirmasi.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
