import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/topbar";
import TableCard from "../../../components/admin/table";
import FormTambahKategori from "../../../components/admin/form/kategori"; 

export default function DaftarKategoriEvent() {
  const kategoriColumns = ["ID", "Nama", "Deskripsi"];
  const [kategoriData, setKategoriData] = useState([
    {
      id: 1,
      nama: "Musik",
      deskripsi: "Event yang berkaitan dengan pertunjukan musik.",
    },
    {
      id: 2,
      nama: "Weeding",
      deskripsi: "Event yang berkaitan dengan acara pernikahan",
    },
    {
      id: 3,
      nama: "Edukasi",
      deskripsi: "Seminar, workshop, dan pelatihan edukatif.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [kategoriEdit, setKategoriEdit] = useState(null);

  const handleTambahKategori = (kategoriBaru) => {
    if (kategoriEdit) {
      // Edit mode
      const updatedData = kategoriData.map((kategori) =>
        kategori.id === kategoriEdit.id ? { ...kategori, ...kategoriBaru } : kategori
      );
      setKategoriData(updatedData);
      setKategoriEdit(null);
    } else {
      // Tambah mode
      const idBaru = kategoriData.length + 1;
      setKategoriData([...kategoriData, { id: idBaru, ...kategoriBaru }]);
    }
    setShowForm(false);
  };

  const handleEdit = (kategori) => {
    setKategoriEdit(kategori);
    setShowForm(true);
  };

  const handleDelete = (kategori) => {
    if (confirm(`Yakin ingin hapus kategori "${kategori.nama}"?`)) {
      setKategoriData(kategoriData.filter((item) => item.id !== kategori.id));
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
              onClick={() => {
                setKategoriEdit(null);
                setShowForm(true);
              }}
            >
              + Tambah Data
            </button>
          </div>

          <div style={{ marginTop: "-20px" }}>
            <TableCard
              title="Daftar Kategori Event"
              columns={kategoriColumns}
              data={kategoriData}
              renderAction={(kategori) => (
                <>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(kategori)}
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(kategori)}
                    title="Hapus"
                  >
                    <FaTrash />
                  </button>
                </>
              )}
            />
          </div>

          <FormTambahKategori
            show={showForm}
            onClose={() => {
              setShowForm(false);
              setKategoriEdit(null);
            }}
            onSubmit={handleTambahKategori}
            initialData={kategoriEdit}
          />
        </div>
      </div>
    </div>
  );
}
