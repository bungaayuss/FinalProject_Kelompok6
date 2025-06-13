"use client"

import "../../../styles/Notifikasi.css"

const Notifikasi = () => {
  const notifikasi = [
    {
      id: 1,
      judul: "Transaksi Berhasil",
      pesan: "Transaksi TRX001 telah berhasil diproses dengan jumlah Rp 150.000",
      waktu: "2 jam yang lalu",
      dibaca: false,
      tipe: "success",
    },
    {
      id: 2,
      judul: "Profil Diperbarui",
      pesan: "Profil Anda telah berhasil diperbarui. Silakan periksa kembali data Anda.",
      waktu: "1 hari yang lalu",
      dibaca: true,
      tipe: "info",
    },
    {
      id: 3,
      judul: "Pembayaran Tertunda",
      pesan: "Pembayaran untuk transaksi TRX003 masih tertunda. Silakan lakukan pembayaran segera.",
      waktu: "2 hari yang lalu",
      dibaca: false,
      tipe: "warning",
    },
    {
      id: 4,
      judul: "Transaksi Gagal",
      pesan: "Transaksi TRX004 gagal diproses. Silakan coba lagi atau hubungi customer service.",
      waktu: "3 hari yang lalu",
      dibaca: false,
      tipe: "error",
    },
    {
      id: 5,
      judul: "Selamat Datang",
      pesan: "Selamat datang di My Data Base! Terima kasih telah bergabung dengan kami.",
      waktu: "1 minggu yang lalu",
      dibaca: true,
      tipe: "info",
    },
  ]

  const handleMarkAsRead = (id) => {
    console.log(`Menandai notifikasi ${id} sebagai sudah dibaca`)
  }

  const handleMarkAllAsRead = () => {
    console.log("Menandai semua notifikasi sebagai sudah dibaca")
  }

  const unreadCount = notifikasi.filter((item) => !item.dibaca).length

  return (
    <div className="notifikasi-page">
      <div className="notifikasi-header">
        <h1 className="notifikasi-title">Notifikasi</h1>
        {unreadCount > 0 && (
          <div className="notifikasi-actions">
            <span className="unread-count">{unreadCount} belum dibaca</span>
            <button className="btn-mark-all" onClick={handleMarkAllAsRead}>
              Tandai Semua Dibaca
            </button>
          </div>
        )}
      </div>

      <div className="notifikasi-list">
        {notifikasi.map((item) => (
          <div key={item.id} className={`notifikasi-item ${item.dibaca ? "read" : "unread"} ${item.tipe}`}>
            <div className="notifikasi-content">
              <div className="notifikasi-main">
                <h3 className="notifikasi-judul">{item.judul}</h3>
                <p className="notifikasi-pesan">{item.pesan}</p>
                <span className="notifikasi-waktu">{item.waktu}</span>
              </div>
              {!item.dibaca && (
                <div className="notifikasi-actions-item">
                  <button className="btn-mark-read" onClick={() => handleMarkAsRead(item.id)}>
                    Tandai Dibaca
                  </button>
                </div>
              )}
            </div>
            {!item.dibaca && <div className="unread-indicator"></div>}
          </div>
        ))}
      </div>

      {notifikasi.length === 0 && (
        <div className="empty-state">
          <p>Tidak ada notifikasi</p>
        </div>
      )}
    </div>
  )
}

export default Notifikasi
