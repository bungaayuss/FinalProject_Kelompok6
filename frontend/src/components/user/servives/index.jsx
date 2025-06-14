"use client"

import { useNavigate } from "react-router-dom"
import "../../../styles/services.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Services() {
  const navigate = useNavigate()

  const categories = [
    {
      id: 1,
      name: "Wedding",
      image: "/paket1.jpg",
      description: "Paket pernikahan dengan berbagai tema dan konsep",
    },
    {
      id: 2,
      name: "Birthday Party",
      image: "/paket2.jpeg",
      description: "Paket ulang tahun untuk segala usia dengan tema menarik",
    },
    {
      id: 3,
      name: "Corporate Event",
      image: "/paket3.jpeg",
      description: "Paket acara perusahaan, konser, dan hiburan",
    },
    {
      id: 4,
      name: "Graduation",
      image: "/paket4.jpg",
      description: "Paket wisuda dan perayaan kelulusan",
    },
    {
      id: 5,
      name: "Engagement",
      image: "/paket5.jpg",
      description: "Paket lamaran dan pertunangan romantis",
    },
  ]

  const handleBooking = (categoryId) => {
    navigate(`/kategori/${categoryId}`)
  }

  return (
    <div className="services-wrapper">
      <section className="services-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-5">
              <h2 className="services-title">Services & Packages</h2>
              <p className="services-subtitle-desc">Pilih kategori event yang sesuai dengan kebutuhan Anda</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <div className="categories-grid">
                {categories.map((cat) => (
                  <div className="category-card" key={cat.id}>
                    <div className="category-image-container">
                      <img src={cat.image || "/placeholder.svg"} alt={cat.name} className="category-image" />
                      <div className="category-overlay">
                        <button className="category-btn" onClick={() => handleBooking(cat.id)}>
                          Lihat Paket
                        </button>
                      </div>
                    </div>
                    <div className="category-content">
                      <h5 className="category-name">{cat.name}</h5>
                      <p className="category-description">{cat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
