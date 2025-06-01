import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/topbar";
import TableCard from "../../../components/admin/table";
import DetailModal from "../../../components/admin/detailModal";
import FormTambahData from "../../../components/admin/form/kategori";


export default function DUser() {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const userColumns = ["ID", "Nama", "Email", "Status"];
  const [userData, setUserData]= useState([
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
  ]);

  const handleTambahUser = (newUser) => {
  const idBaru = userData.length + 1;
  const dataBaru = { ...newUser, id: idBaru, status: "Aktif" };
  setUserData([...userData, dataBaru]);
  };

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
          <FormTambahData onSubmit={handleTambahUser} />
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
