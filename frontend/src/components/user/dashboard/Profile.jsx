"use client"

import { useState } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
import "../../../styles/Profile.css" // pastikan path benar

const Profile = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    alert("Data berhasil disimpan")
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      console.log("File uploaded:", file.name)
    }
  }

  return (
    <div className="profil-dashboard-content">
      <div className="profil-header">
        <h2 className="profil-main-title">Profil Saya</h2>
        <p className="profil-subtitle">Kelola informasi pribadi Anda dengan mudah dan aman</p>
      </div>

      <div className="profil-container">
        {/* Form Kiri */}
        <div className="profil-form-section">
          <div className="profil-form-card">
            <h4 className="profil-section-title">Informasi Pribadi</h4>

            <div className="profil-form-group">
              <label className="profil-label">Nama Lengkap</label>
              <input
                type="text"
                className="profil-input"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div className="profil-form-group">
              <label className="profil-label">Email</label>
              <input
                type="email"
                className="profil-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email aktif"
              />
            </div>

            <div className="profil-form-group">
              <label className="profil-label">No. Telepon</label>
              <input
                type="text"
                className="profil-input"
                name="telepon"
                value={formData.telepon}
                onChange={handleChange}
                placeholder="Masukkan nomor telepon"
              />
            </div>

            <div className="profil-form-group">
              <label className="profil-label">Alamat</label>
              <textarea
                className="profil-textarea"
                name="alamat"
                rows="4"
                value={formData.alamat}
                onChange={handleChange}
                placeholder="Masukkan alamat lengkap"
              ></textarea>
            </div>

            <div className="profil-form-actions">
              <button className="profil-btn profil-btn-cancel">Batal</button>
              <button className="profil-btn profil-btn-save" onClick={handleSave}>
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>

        {/* Foto Profil Kanan */}
        <div className="profil-photo-section">
          <div className="profil-photo-card">
            <div className="profil-photo-container">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=2563eb&color=fff&size=200"
                className="profil-photo"
                alt="Profile"
              />
              <div className="profil-photo-overlay">
                <label htmlFor="photo-upload" className="profil-photo-upload-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </div>
            </div>

            <div className="profil-photo-info">
              <h5 className="profil-photo-title">Foto Profil</h5>
              <p className="profil-photo-desc">
                Unggah foto terbaru Anda agar mudah dikenali oleh rekan kerja dan klien
              </p>
              <div className="profil-photo-requirements">
                <small>• Format: JPG, PNG, GIF</small>
                <small>• Ukuran maksimal: 5MB</small>
                <small>• Resolusi minimal: 400x400px</small>
              </div>
            </div>
          </div>

          {/* Info Card Tambahan */}
          <div className="profil-info-card">
            <h6 className="profil-info-title">Status Akun</h6>
            <div className="profil-status-item">
              <span className="profil-status-label">Verifikasi Email</span>
              <span className="profil-status-badge profil-status-verified">Terverifikasi</span>
            </div>
            <div className="profil-status-item">
              <span className="profil-status-label">Verifikasi Telepon</span>
              <span className="profil-status-badge profil-status-pending">Pending</span>
            </div>
            <div className="profil-status-item">
              <span className="profil-status-label">Bergabung Sejak</span>
              <span className="profil-status-value">15 Januari 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;