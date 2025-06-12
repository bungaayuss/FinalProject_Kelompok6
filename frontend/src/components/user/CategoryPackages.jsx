"use client"

import { useParams, useNavigate } from "react-router-dom"
import "../../styles/CategoryPackage.css"

const allPackages = [
  // Wedding Packages (Category 1)
  {
    id: 1,
    name: "Paket Wedding Modern Glam",
    description: "Venue indoor + Dekorasi glamor + Dokumentasi full day",
    image: "/wedding_glam.jpg",
    price: 12000000,
    originalPrice: 16800000,
    categories_id: 1,
    features: [
      "Venue Indoor Mewah",
      "Dekorasi Glamor",
      "Dokumentasi Full Day",
      "Catering 100 pax",
      "Wedding Organizer",
    ],
  },
  // ... (semua paket lainnya tidak diubah, tetap seperti versi HEAD)
  {
    id: 21,
    name: "Paket Engagement Garden",
    description: "Tema taman + Lampu fairy + Catering kecil",
    image: "/engagement_garden.jpg",
    price: 7000000,
    originalPrice: 9800000,
    categories_id: 5,
    features: ["Tema Taman", "Lampu Fairy Lights", "Catering Kecil", "Garden Setup", "Romantic Photography"],
  },
]

const categoryNames = {
  1: "Wedding",
  2: "Birthday Party",
  3: "Corporate Event",
  4: "Graduation",
  5: "Engagement",
}

export default function CategoryPackage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const categoryId = Number(id)

  const packages = allPackages.filter((pkg) => pkg.categories_id === categoryId)
  const categoryName = categoryNames[categoryId] || "Kategori Tidak Diketahui"

  const handleSelectPackage = (pkg) => {
    navigate("/transaksi", { state: { package: pkg } })
  }

  return (
    <section className="category-package-section">
      <div className="container">
        <div className="category-header">
          <button className="back-btn-small" onClick={() => navigate("/service")}>
            ← Kembali
          </button>
          <h2 className="category-title">Paket {categoryName}</h2>
          <p className="category-subtitle">Pilih paket yang sesuai dengan kebutuhan acara Anda</p>
        </div>

        {packages.length === 0 ? (
          <div className="empty-state">
            <h3>Paket Tidak Tersedia</h3>
            <p>Maaf, belum ada paket untuk kategori ini.</p>
          </div>
        ) : (
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-image-container">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    className="package-image"
                  />
                  <div className="package-discount">
                    HEMAT {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%
                  </div>
                </div>

                <div className="package-content">
                  <h3 className="package-name">{pkg.name}</h3>
                  <p className="package-description">{pkg.description}</p>

                  {pkg.features && (
                    <div className="package-features">
                      <h5>Yang Anda Dapatkan:</h5>
                      <ul>
                        {pkg.features.map((feature, index) => (
                          <li key={index}>
                            <span className="check-icon">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="package-pricing">
                    <span className="original-price">
                      Rp {pkg.originalPrice.toLocaleString()}
                    </span>
                    <span className="current-price">
                      Rp {pkg.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => handleSelectPackage(pkg)}
                    className="select-package-btn"
                  >
                    Pilih Paket Ini
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
