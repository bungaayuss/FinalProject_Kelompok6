import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/topbar";
import TableCard from "../../../components/admin/table";
import DetailModal from "../../../components/admin/detailModal";

export default function DaftarAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const adminColumns = ["ID", "Nama", "Email", "Status"];
  const adminData = [
    {
      id: 1,
      nama: "Admin Setiawan",
      email: "admin.setiawan@example.com",
      status: "Aktif",
    },
    {
      id: 2,
      nama: "Admin Andi",
      email: "admin.andi@example.com",
      status: "Nonaktif",
    },
    {
      id: 3,
      nama: "Admin Sari",
      email: "admin.sari@example.com",
      status: "Aktif",
    },
  ];

  const handleDelete = (admin) => {
    alert(`Hapus admin: ${admin.nama}`);
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar />
        <div className="p-4">
          <div style={{ marginTop: "-20px" }}>
            <TableCard
              title="Daftar Admin"
              columns={adminColumns}
              data={adminData}
              renderAction={(admin) => (
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(admin)}
                  title="Hapus"
                >
                  <FaTrash />
                </button>
              )}
            />
          </div>

          {showModal && (
            <DetailModal
              user={selectedAdmin}
              onClose={() => {
                setShowModal(false);
                setSelectedAdmin(null);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
