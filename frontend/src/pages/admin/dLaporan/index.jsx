import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/topbar";
import TableCard from "../../../components/admin/table";
import {
  getConfirmations,
  updateConfirmations,
} from "../../../_services/confirmation";
import { getUsers } from "../../../_services/user";

export default function LaporanKonfirmasi() {
  const [confirmations, setConfirmations] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [, setAdmins] = useState([]);

  const columns = [
    {
      title: "Transaksi ID",
      dataIndex: "transactions_id",
    },
    {
      title: "Bukti Pembayaran",
      dataIndex: "image",
      render: (image) =>
        image ? (
          <img
            src={`/storage/${image}`}
            alt="Bukti"
            style={{ width: "80px", borderRadius: "10px" }}
          />
        ) : (
          "Tidak ada gambar"
        ),
    },
    {
      title: "Tanggal Pembayaran",
      dataIndex: "payment_date",
    },
    {
      title: "Total",
      dataIndex: "amount",
      render: (amount) => `Rp ${parseInt(amount).toLocaleString()}`,
    },
    {
      title: "Nama Customer",
      dataIndex: "user_id",
      render: (user_id) => {
        const customer = customers.find((u) => u.id === user_id);
        return customer ? customer.name : "Tidak ditemukan";
      },
    },
    {
      title: "Nama Admin",
      dataIndex: "admin_name",
      render: (admin_name) => admin_name || "Belum diverifikasi",
    },
  ];

  const statusOptions = [
    { label: "Menunggu Verifikasi", value: "Waiting verification" },
    { label: "Terbayar", value: "Paid" },
    { label: "Ditolak", value: "Rejected" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [confirmationsData, userData] = await Promise.all([
          getConfirmations(),
          getUsers(),
        ]);
        setConfirmations(confirmationsData);
        setCustomers(userData.filter((u) => u.role === "user"));
        setAdmins(userData.filter((u) => u.role === "admin"));
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        alert("Gagal mengambil data confirmations dan user.");
      }
    };

    fetchData();
  }, []);

  const handleChange = async (e, record) => {
    const newStatus = e.target.value;
    const adminName = localStorage.getItem("admin_name");

    try {
      await updateConfirmations(record.transactions_id, {
        status: newStatus,
        admin_name: adminName,
      });

      setConfirmations((prevConfirmations) =>
        prevConfirmations.map((confirmation) =>
          confirmation.transactions_id === record.transactions_id
            ? { ...confirmation, status: newStatus, admin_name: adminName }
            : confirmation
        )
      );
    } catch (error) {
      console.error("Gagal memperbarui status:", error);
      alert("Gagal memperbarui status transaksi.");
    }
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar />
        <div className="p-4">
          <TableCard
            title="Laporan Konfirmasi Pembayaran"
            columns={columns}
            data={confirmations}
            renderAction={(record) => (
              <select
                className="form-select form-select-sm"
                value={record.status}
                onChange={(e) => handleChange(e, record)}
                style={{
                  backgroundColor:
                    record.status === "Paid"
                      ? "#d1e7dd !important"
                      : record.status === "Rejected"
                      ? "#f8d7da !important"
                      : "#fff3cd !important",
                  borderRadius: "8px",
                  color:
                    record.status === "Paid"
                      ? "#0f5132 !important"
                      : record.status === "Rejected"
                      ? "#842029 !important"
                      : "#664d03 !important",
                  fontWeight: "500",
                }}
              >
                <option value="">Pilih Status</option>
                {statusOptions.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
      </div>
    </div>
  );
}
