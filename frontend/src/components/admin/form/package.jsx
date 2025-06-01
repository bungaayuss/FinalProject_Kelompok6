// dari sini
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FormTambahPackageEvent({
  show,
  onClose,
  onSubmit,
  initialData,
}) {
  const [formData, setFormData] = useState({
    kategori: "",
    nama: "",
    deskripsi: "",
    harga: "",
    foto: "",
  });

  useEffect(() => {
    if (initialData) {
      // Harga diubah ke string supaya mudah diinput
      setFormData({
        kategori: initialData.kategori || "",
        nama: initialData.nama || "",
        deskripsi: initialData.deskripsi || "",
        harga:
          initialData.harga !== undefined ? initialData.harga.toString() : "",
        foto: initialData.foto || "",
      });
    } else {
      setFormData({
        kategori: "",
        nama: "",
        deskripsi: "",
        harga: "",
        foto: "",
      });
    }
  }, [initialData, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi harga sebagai number positif
    if (isNaN(formData.harga) || Number(formData.harga) < 0) {
      alert("Harga harus berupa angka positif");
      return;
    }

    // Kirim data dengan harga sebagai number
    onSubmit({
      kategori: formData.kategori,
      nama: formData.nama,
      deskripsi: formData.deskripsi,
      harga: Number(formData.harga),
      foto: formData.foto,
    });
  };

  if (!show) return null;

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">
                {initialData ? "Edit Package Event" : "Tambah Package Event"}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Kategori</label>
                <input
                  type="text"
                  className="form-control"
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Deskripsi</label>
                <textarea
                  className="form-control"
                  name="deskripsi"
                  value={formData.deskripsi}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Harga</label>
                <input
                  type="number"
                  className="form-control"
                  name="harga"
                  value={formData.harga}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Foto (URL)</label>
                <input
                  type="text"
                  className="form-control"
                  name="foto"
                  value={formData.foto}
                  onChange={handleChange}
                  placeholder="Masukkan URL foto"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Batal
              </button>
              <button type="submit" className="btn btn-primary">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
