import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/topbar";
import TableCard from "../../../components/admin/table";
import FormTambahPackageEvent from "../../../components/admin/form/package";

export default function DaftarPackageEvent() {
  const packageColumns = ["ID", "Kategori", "Nama", "Deskripsi", "Harga", "Foto"];
  const [packageData, setPackageData] = useState([
    {
      id: 1,
      kategori: "Musik",
      nama: "Konser Rock",
      deskripsi: "Konser musik rock terbesar tahun ini.",
      harga: 25000000,
      foto: "https://img.mbizmarket.co.id/products/thumbs/800x800/2023/05/09/290d15822412516cd5e22f543725321d.jpg",
    },
    {
      id: 2,
      kategori: "Weeding",
      nama: "Pernikahan",
      deskripsi: "Pernikahan dengan adat Jawa",
      harga: 15000000,
      foto: "https://1.bp.blogspot.com/-dXHLq50P2BI/XEltEE-bRJI/AAAAAAAAKlk/Sy5BTSboLQUOslLFfnT8QarPxwyogCBdQCLcBGAs/s1600/dekorasi-pernikahan-adat-jawa-22.jpg",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [packageEdit, setPackageEdit] = useState(null);

  const handleTambahPackage = (packageBaru) => {
    if (packageEdit) {
      // Edit mode
      const updatedData = packageData.map((p) =>
        p.id === packageEdit.id ? { ...p, ...packageBaru } : p
      );
      setPackageData(updatedData);
      setPackageEdit(null);
    } else {
      // Tambah mode
      const idBaru = packageData.length + 1;
      setPackageData([...packageData, { id: idBaru, ...packageBaru }]);
    }
    setShowForm(false);
  };

  const handleEdit = (paket) => {
    setPackageEdit(paket);
    setShowForm(true);
  };

  const handleDelete = (paket) => {
    if (confirm(`Yakin ingin hapus package "${paket.nama}"?`)) {
      setPackageData(packageData.filter((item) => item.id !== paket.id));
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
                setPackageEdit(null);
                setShowForm(true);
              }}
            >
              + Tambah Data
            </button>
          </div>

          <div style={{ marginTop: "-20px" }}>
            <TableCard
            title="Daftar Package Event"
            columns={packageColumns}
            data={packageData.map((row) => ({
              ...row,
              foto: (
                <img
                  src={row.foto}
                  alt={row.nama}
                  style={{ width: "100px", height: "auto", objectFit: "cover" }}
                />
              ),
            }))}
            renderAction={(paket) => (
              <>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(paket)}
                  title="Edit"
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(paket)}
                  title="Hapus"
                >
                  <FaTrash />
                </button>
              </>
            )}
          />
                    </div>

          <FormTambahPackageEvent
            show={showForm}
            onClose={() => {
              setShowForm(false);
              setPackageEdit(null);
            }}
            onSubmit={handleTambahPackage}
            initialData={packageEdit}
          />
        </div>
      </div>
    </div>
  );
}
