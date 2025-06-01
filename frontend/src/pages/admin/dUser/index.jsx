import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/topbar";
import TableCard from "../../../components/admin/table";
import DetailModal from "../../../components/admin/detailModal";

export default function DUser() {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const userColumns = ["ID", "Nama", "Email", "Status"];
  const userData = [
    {
      id: 1,
      nama: "Setiawan",
      email: "setiawan@example.com",
      status: "Aktif",
    },
    {
      id: 2,
      nama: "Andi Pratama",
      email: "andi@example.com",
      status: "Nonaktif",
    },
    { id: 3, nama: "Sari Dewi", email: "sari@example.com", status: "Aktif" },
  ];

  const handleDelete = (user) => {
    alert(`Hapus user: ${user.nama}`);
  };

  return (
    <div
      className="d-flex"
      style={{minHeight: "100vh" }}
    >
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar />
        <div className="p-4">
          <div style={{ marginTop: "-20px" }}>
            <TableCard
              title="Daftar User"
              columns={userColumns}
              data={userData}
              renderAction={(user) => (
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(user)}
                  title="Hapus"
                >
                  <FaTrash />
                </button>
              )}
            />
          </div>

          {showModal && (
            <DetailModal
              user={selectedUser}
              onClose={() => {
                setShowModal(false);
                setSelectedUser(null);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
