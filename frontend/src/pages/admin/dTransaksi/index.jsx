import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/topbar";
import FormTambahTransaksi from "../../../components/admin/form/transaksi";

export default function DaftarTransaksi() {
  const transaksiColumns = [
    "ID",
    "User ID",
    "Package ID",
    "Nama Event",
    "Tanggal Event",
    "Detail Event",
    "Venue",
    "Jumlah Tamu",
    "Metode Pembayaran",
    "Permintaan Khusus",
    "Tanggal Transaksi",
    "Total",
    "Status",
  ];

  const [transactionData, setTransactionData] = useState([
    {
      id: 1,
      userId: 101,
      packageId: 1,
      namaEvent: "Festival Musik Indie",
      tanggalEvent: "2025-07-15",
      detailEvent: "Acara musik untuk band-band indie lokal",
      venue: "Lapangan Kota Surabaya",
      guestCount: 300,
      paymentMethod: "Transfer Bank",
      specialRequest: "Tambahan tenda dan pendingin ruangan",
      tanggalTransaksi: "2025-06-01",
      total: 3000000,
      status: "Menunggu Pembayaran",
    },
    {
      id: 2,
      userId: 102,
      packageId: 2,
      namaEvent: "Pernikahan Adat Bali",
      tanggalEvent: "2025-08-22",
      detailEvent: "Pernikahan dengan adat Bali yang sakral",
      venue: "Bali Convention Center",
      guestCount: 500,
      paymentMethod: "Kartu Kredit",
      specialRequest: "Dekorasi bunga Bali",
      tanggalTransaksi: "2025-06-05",
      total: 20000000,
      status: "Lunas",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleTambahTransaksi = (transaksiBaru) => {
    const idBaru = transactionData.length + 1;
    setTransactionData([...transactionData, { id: idBaru, ...transaksiBaru }]);
    setShowForm(false);
  };

  const handleDelete = (transaksi) => {
    if (confirm(`Yakin ingin hapus transaksi "${transaksi.namaEvent}"?`)) {
      setTransactionData(transactionData.filter((item) => item.id !== transaksi.id));
    }
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar />
        <div className="p-4">
          <div className="mb-3 text-end">
            <button
              className="btn btn-success"
              onClick={() => setShowForm(true)}
            >
              + Tambah Transaksi
            </button>
          </div>

          <div className="bg-white rounded-4 shadow-sm p-4">
            <h5 className="fw-bold text-primary mb-4">Daftar Transaksi</h5>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    {transaksiColumns.map((col, idx) => (
                      <th key={idx}>{col}</th>
                    ))}
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.length > 0 ? (
                    transactionData.map((transaksi) => (
                      <tr key={transaksi.id}>
                        <td>{transaksi.id}</td>
                        <td>{transaksi.userId}</td>
                        <td>{transaksi.packageId}</td>
                        <td>{transaksi.namaEvent}</td>
                        <td>{transaksi.tanggalEvent}</td>
                        <td>{transaksi.detailEvent}</td>
                        <td>{transaksi.venue}</td>
                        <td>{transaksi.guestCount}</td>
                        <td>{transaksi.paymentMethod}</td>
                        <td>{transaksi.specialRequest}</td>
                        <td>{transaksi.tanggalTransaksi}</td>
                        <td>{`Rp ${transaksi.total.toLocaleString()}`}</td>
                        <td>{transaksi.status}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(transaksi)}
                            title="Hapus"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={transaksiColumns.length + 1} className="text-center text-muted">
                        Tidak ada data.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <FormTambahTransaksi
            show={showForm}
            onClose={() => setShowForm(false)}
            onSubmit={handleTambahTransaksi}
            initialData={null}
          />
        </div>
      </div>
    </div>
  );
}