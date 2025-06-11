"use client"

import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import "../../styles/Transaction.css";

export default function Transaction() {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedPackage = location.state?.package

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    guestCount: "",
    specialRequests: "",
    paymentMethod: "transfer",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!selectedPackage) {
    return (
      <div className="error-container">
        <h2>Data paket tidak ditemukan</h2>
        <p>Silakan pilih paket terlebih dahulu</p>
        <button onClick={() => navigate("/services")} className="btn-primary">
          Kembali ke Services
        </button>
      </div>
    )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulasi proses pembayaran
    setTimeout(() => {
      alert("Transaksi berhasil! Kami akan menghubungi Anda segera.")
      setIsSubmitting(false)
      navigate("/services")
    }, 2000)
  }

  const adminFee = 50000
  const totalPrice = selectedPackage.price + adminFee

  return (
    <section className="transaction-section">
      <div className="container">
        <div className="transaction-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Kembali
          </button>
          <h2 className="transaction-title">Konfirmasi Pemesanan</h2>
        </div>

        <div className="transaction-content">
          {/* Package Summary */}
          <div className="package-summary">
            <h3>Ringkasan Paket</h3>
            <div className="summary-card">
              <img
                src={selectedPackage.image || "/placeholder.svg"}
                alt={selectedPackage.name}
                className="summary-image"
              />
              <div className="summary-details">
                <h4>{selectedPackage.name}</h4>
                <p>{selectedPackage.description}</p>
                <div className="price-breakdown">
                  <div className="price-item">
                    <span>Harga Paket:</span>
                    <span>Rp {selectedPackage.price.toLocaleString()}</span>
                  </div>
                  <div className="price-item">
                    <span>Biaya Admin:</span>
                    <span>Rp {adminFee.toLocaleString()}</span>
                  </div>
                  <div className="price-item total">
                    <span>Total Pembayaran:</span>
                    <span>Rp {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Form */}
          <div className="transaction-form">
            <h3>Detail Pemesanan</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="customerName">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    required
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="contoh@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Nomor Telepon *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventDate">Tanggal Acara *</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventTime">Waktu Acara *</label>
                  <input
                    type="time"
                    id="eventTime"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="guestCount">Jumlah Tamu *</label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    required
                    placeholder="Perkiraan jumlah tamu"
                    min="1"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="venue">Lokasi Acara *</label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  required
                  placeholder="Alamat lengkap lokasi acara"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="specialRequests">Permintaan Khusus</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Ceritakan detail khusus yang Anda inginkan..."
                  rows="4"
                ></textarea>
              </div>

              <div className="form-group full-width">
                <label htmlFor="paymentMethod">Metode Pembayaran *</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                >
                  <option value="transfer">Transfer Bank</option>
                  <option value="credit">Kartu Kredit</option>
                  <option value="ewallet">E-Wallet</option>
                  <option value="cash">Cash</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
                  Batal
                </button>
                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Memproses..." : "Konfirmasi Pemesanan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
