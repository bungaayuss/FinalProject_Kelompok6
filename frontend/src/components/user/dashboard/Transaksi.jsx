"use client"

import { useState, useMemo } from "react"
import "../../../styles/Transaksi.css"

const Transaksi = () => {
  const [filterStatus, setFilterStatus] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const allTransaksi = [
    {
      id: "TRX001",
      tanggal: "15 Januari 2024",
      namaEvent: "Pernikahan Sarah & John",
      paket: "Paket Wedding Modern Glam",
      total: "Rp 12.000.000",
      status: "Selesai",
      rating: 5,
    },
    {
      id: "TRX002",
      tanggal: "14 Januari 2024",
      namaEvent: "Ulang Tahun Anak",
      paket: "Paket Ulang Tahun Aesthetic",
      total: "Rp 3.000.000",
      status: "Selesai",
      rating: 4,
    },
    {
      id: "TRX003",
      tanggal: "13 Januari 2024",
      namaEvent: "Konser Musik Indie",
      paket: "Paket Konser Musik Full Package",
      total: "Rp 15.000.000",
      status: "Berlangsung",
      rating: null,
    },
    {
      id: "TRX004",
      tanggal: "12 Januari 2024",
      namaEvent: "Wisuda Universitas",
      paket: "Paket Graduation Garden Party",
      total: "Rp 5.500.000",
      status: "Dibatalkan",
      rating: null,
    },
    {
      id: "TRX005",
      tanggal: "11 Januari 2024",
      namaEvent: "Lamaran Romantis",
      paket: "Paket Engagement Bohemian",
      total: "Rp 6.000.000",
      status: "Selesai",
      rating: 5,
    },
    {
      id: "TRX006",
      tanggal: "10 Januari 2024",
      namaEvent: "Pernikahan Outdoor",
      paket: "Paket Wedding Rustic",
      total: "Rp 10.000.000",
      status: "Menunggu Pembayaran",
      rating: null,
    },
    {
      id: "TRX007",
      tanggal: "9 Januari 2024",
      namaEvent: "Corporate Event",
      paket: "Paket Meeting Professional",
      total: "Rp 8.000.000",
      status: "Selesai",
      rating: 4,
    },
    {
      id: "TRX008",
      tanggal: "8 Januari 2024",
      namaEvent: "Baby Shower",
      paket: "Paket Baby Shower Pink Theme",
      total: "Rp 4.500.000",
      status: "Selesai",
      rating: 5,
    },
  ]

  // Filter untuk user pembeli (lebih sederhana)
  const filteredTransaksi = useMemo(() => {
    return allTransaksi.filter((item) => {
      const matchStatus = filterStatus === "" || item.status === filterStatus

      // Pencarian yang lebih komprehensif
      const searchLower = searchTerm.toLowerCase()
      const matchSearch =
        searchTerm === "" ||
        item.namaEvent.toLowerCase().includes(searchLower) ||
        item.id.toLowerCase().includes(searchLower) ||
        item.paket.toLowerCase().includes(searchLower) ||
        item.tanggal.toLowerCase().includes(searchLower) ||
        item.total.toLowerCase().includes(searchLower)

      return matchStatus && matchSearch
    })
  }, [filterStatus, searchTerm, allTransaksi])

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const clearFilters = () => {
    setFilterStatus("")
    setSearchTerm("")
  }

  const getStatusBadge = (status) => {
    const statusClasses = {
      Selesai: "status-completed",
      Berlangsung: "status-ongoing",
      "Menunggu Pembayaran": "status-pending",
      Dibatalkan: "status-cancelled",
    }
    return statusClasses[status] || "status-default"
  }

  const displayedTransaksi = filteredTransaksi

  return (
    <div className="transaksi-user-page">
      <div className="transaksi-header">
        <h1 className="transaksi-title">Riwayat Pesanan Saya</h1>
        <p className="transaksi-subtitle">Lihat semua event yang pernah Anda pesan</p>
      </div>

      <div className="transaksi-filter-simple">
        <div className="filter-group">
          <select className="filter-select" value={filterStatus} onChange={handleStatusChange}>
            <option value="">Semua Status</option>
            <option value="Selesai">Selesai</option>
            <option value="Berlangsung">Berlangsung</option>
            <option value="Menunggu Pembayaran">Menunggu Pembayaran</option>
            <option value="Dibatalkan">Dibatalkan</option>
          </select>
        </div>
        <div className="filter-group">
          <input
            type="text"
            className="filter-input"
            placeholder="Cari nama event, ID pesanan, paket, tanggal, atau harga..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {(filterStatus || searchTerm) && (
          <button className="btn-clear-filter" onClick={clearFilters}>
            Reset
          </button>
        )}
      </div>

      <div className={`transaksi-grid`}>
        {displayedTransaksi.length > 0 ? (
          displayedTransaksi.map((item) => (
            <div key={item.id} className="transaksi-card">
              <div className="card-header">
                <div className="event-info">
                  <h3 className="event-name">{item.namaEvent}</h3>
                  <p className="event-date">{item.tanggal}</p>
                </div>
                <span className={`status-badge ${getStatusBadge(item.status)}`}>{item.status}</span>
              </div>

              <div className="card-body">
                <div className="package-info">
                  <p className="package-name">{item.paket}</p>
                  <p className="order-id">ID Pesanan: {item.id}</p>
                </div>

                <div className="price-rating">
                  <div className="price">{item.total}</div>
                </div>
              </div>

              <div className="card-actions">
                {item.status === "Menunggu Pembayaran" && <button className="btn-pay">Bayar Sekarang</button>}
                <button className="btn-detail">Lihat Detail</button>
                {item.status === "Selesai" && <button className="btn-reorder">Pesan Lagi</button>}
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h3>Belum Ada Pesanan</h3>
            <p>Anda belum memiliki riwayat pesanan yang sesuai dengan pencarian</p>
            <button className="btn-browse" onClick={clearFilters}>
              Lihat Semua Pesanan
            </button>
          </div>
        )}
      </div>

      {/* Summary untuk user */}
      <div className="user-summary">
        <div className="summary-card">
          <h3>Ringkasan Pesanan Anda</h3>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">{filteredTransaksi.filter((t) => t.status === "Selesai").length}</span>
              <span className="stat-label">Event Selesai</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{filteredTransaksi.filter((t) => t.status === "Berlangsung").length}</span>
              <span className="stat-label">Sedang Berlangsung</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {filteredTransaksi.filter((t) => t.status === "Menunggu Pembayaran").length}
              </span>
              <span className="stat-label">Menunggu Pembayaran</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaksi
