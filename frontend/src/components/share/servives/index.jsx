"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getPackages } from "../../../_services/packages"
import "../../../styles/services.css"

export default function Services() {
  const navigate = useNavigate()
  const [packages, setPackages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [packagesData] = await Promise.all([getPackages()])
        setPackages(packagesData)
      } catch (error) {
        console.error("Gagal mengambil data paket:", error)
      }
    }

    fetchData()
  }, [])

  const handleBooking = (categoryId) => {
    navigate(`/kategori/${categoryId}`)
  }

  return (
    <div className="services-wrapper" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <section className="services-section" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="services-title" style={{
              color: "#1C57BC",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "3.2rem",
              letterSpacing: "1px",
            }}>
              Services & Packages
            </h2>
            <p className="services-subtitle-desc" style={{
              fontSize: "1.1rem",
              fontFamily: "'Nunito Sans', sans-serif",
              color: "#555",
            }}>
              Pilih kategori event yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {packages.map((item) => (
              <div className="col" key={item.id}>
                <div className="card h-100 border-0 shadow-sm" style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#fff",
                }}>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body text-center" style={{ padding: "25px" }}>
                    <h5 className="card-title mb-3" style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      color: "#333",
                    }}>
                      {item.name}
                    </h5>
                    <button
                      className="btn btn-primary"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0.95rem",
                        padding: "10px 24px",
                        borderRadius: "30px",
                        fontWeight: "600",
                        backgroundColor: "#1C57BC",
                        border: "none",
                      }}
                      onClick={() => handleBooking(item.categories_id)}
                    >
                      Lihat Paket
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
