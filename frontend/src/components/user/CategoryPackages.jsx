"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getPackages } from "../../_services/packages";
import { packagesImage } from "../../_api";
import "../../styles/CategoryPackage.css";

export default function CategoryPackage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [packages, setPackages] = useState([])
  
    // Nama kategori
    const categoryNames = {
      1: "Wedding",
      2: "Birthday Party",
      3: "Corporate Event",
      4: "Graduation",
      5: "Engagement",
    }
  
    // Mapping foto untuk setiap paket berdasarkan nama
    const getPackageImage = (packageName, categoryId) => {
      const imageMap = {
        // Wedding
        "Paket Wedding Modern Glam": "/images/wedding_glam.jpg",
        "Paket Wedding Rustic": "/images/wedding_rustic.jpg",
        "Paket Wedding Classic": "/images/wedding_classic.jpg",
        "Paket Wedding Outdoor Elegan": "/images/wedding_outdoor_elegan.jpg",
  
        // Birthday
        "Paket Ulang Tahun Aesthetic": "/images/birthday_aesthetic.jpeg",
        "Paket Ulang Tahun Tema Kartun": "/images/birthday_cartoon.jpg",
        "Paket Ulang Tahun Minimalis": "/images/birthday_minimalist.jpg",
        "Paket Ulang Tahun Outdoor": "/images/birthday_outdoor.jpg",
  
        // Corporate/Concert
        "Paket Konser Musik Full Package": "/images/concert_full.jpg",
        "Paket Event Outdoor": "/images/event_outdoor.jpg",
        "Paket Pertunjukan Seni": "/images/arts_performance.jpg",
        "Paket Hiburan Mini": "/images/mini_entertainment.jpg",
  
        // Graduation
        "Paket Graduation Garden Party": "/images/graduation_garden.jpeg",
        "Paket Graduation Indoor": "/images/graduation_indoor.jpg",
        "Paket Graduation Simple": "/images/graduation_simple.jpg",
        "Paket Graduation Themed Party": "/images/graduation_themed.jpg",
  
        // Engagement
        "Paket Engagement Bohemian": "/images/engagement_boho.jpeg",
        "Paket Engagement Classic": "/images/engagement_classic.jpeg",
        "Paket Engagement Modern": "/images/engagement_modern.jpg",
        "Paket Engagement Garden": "/images/engagement_garden.jpg",
      }
  
      return imageMap[packageName] || "/images/default_package.jpg"
    }
  
    // Ambil data dari API Laravel
    useEffect(() => {
      const fetchPackages = async () => {
        try {
          const allPackages = await getPackages()
          const categoryId = Number.parseInt(id)
          const filteredPackages = allPackages.filter((pkg) => pkg.categories_id === categoryId)
  
          setPackages(filteredPackages)
          localStorage.setItem(`packages_category_${categoryId}`, JSON.stringify(filteredPackages))
        } catch (error) {
          console.log("Error fetching packages:", error)
  
          // Coba ambil dari localStorage sebagai fallback
          const savedPackages = localStorage.getItem(`packages_category_${id}`)
          if (savedPackages) {
            setPackages(JSON.parse(savedPackages))
          }
        }
      }
  
      if (id) {
        fetchPackages()
      }
    }, [id])
  
    // Format harga ke Rupiah
    const formatPrice = (price) => {
      return "Rp " + price.toLocaleString("id-ID")
    }
  
    // Hitung harga asli (asumsi diskon 30%)
    const getOriginalPrice = (currentPrice) => {
      return Math.round(currentPrice / 0.7)
    }
  
    // Hitung persentase diskon
    const getDiscount = (currentPrice, originalPrice) => {
      return Math.round((1 - currentPrice / originalPrice) * 100)
    }
  
    // Generate fitur berdasarkan kategori dan nama paket
    const getFeatures = (categoryId, packageName) => {
      const baseFeatures = {
        1: ["Venue Premium", "Dekorasi Mewah", "Dokumentasi Professional", "Catering", "Wedding Organizer"],
        2: ["Dekorasi Tema", "Hiburan Anak", "Snack Box", "Photography", "Games & Activities"],
        3: ["Sound System", "Stage Setup", "Lighting Professional", "MC", "Event Coordinator"],
        4: ["Dekorasi Wisuda", "Photography", "Catering", "Sound System", "Event Setup"],
        5: ["Dekorasi Romantic", "Photography", "Catering Intimate", "Music", "Setup Premium"],
      }
  
      const features = baseFeatures[categoryId] || ["Service Premium", "Professional Team"]
  
      const name = packageName.toLowerCase()
      if (name.includes("glam")) {
        features[1] = "Dekorasi Glamor"
      }
      if (name.includes("rustic")) {
        features[1] = "Dekorasi Kayu Rustic"
      }
      if (name.includes("outdoor")) {
        features[0] = "Venue Outdoor"
      }
      if (name.includes("aesthetic")) {
        features[0] = "Dekorasi Pinterest Style"
      }
  
      return features
    }
  
    // Handle pilih paket - DENGAN DEBUG
    const handleSelectPackage = (pkg) => {
      console.log("Button clicked! Package:", pkg.name) // Debug log
  
      const originalPrice = getOriginalPrice(pkg.price)
      const features = getFeatures(pkg.categories_id, pkg.name)
  
      const selectedPackage = {
        ...pkg,
        originalPrice: originalPrice,
        features: features,
      }
  
      // Simpan ke localStorage
      localStorage.setItem("selectedPackage", JSON.stringify(selectedPackage))
      console.log("Data saved to localStorage:", selectedPackage) // Debug log
  
      // Debug: cek apakah data tersimpan
      const saved = localStorage.getItem("selectedPackage")
      console.log("Verification - data in localStorage:", saved) // Debug log
  
      // Navigate ke halaman transaction
      console.log("Navigating to /transaction...") // Debug log
      navigate("/transaction")
    }
  
    const categoryName = categoryNames[Number.parseInt(id)] || "Unknown"
  
    return (
      <div className="category-package">
        <div className="container">
          {/* Header */}
          <div className="header">
            {/* Button kembali ke page service */}
            <button className="back-btn" onClick={() => navigate("/service")}>
              ← Kembali
            </button>
            <h1>Paket {categoryName}</h1>
            <p>Pilih paket yang sesuai dengan kebutuhan acara Anda</p>
          </div>
  
          {/* Packages - Langsung tampil tanpa loading atau empty state */}
          <div className="packages-grid">
            {packages.map((pkg) => {
              const originalPrice = getOriginalPrice(pkg.price)
              const discount = getDiscount(pkg.price, originalPrice)
              const features = getFeatures(pkg.categories_id, pkg.name)
              const packageImage = getPackageImage(pkg.name, pkg.categories_id)
  
              return (
                <div key={pkg.id} className="package-card">
                  {/* Gambar */}
                  <div className="image-container">
                    <img
                      src={packageImage || "/placeholder.svg"}
                      alt={pkg.name}
                      onError={(e) => {
                        console.log("Image failed to load:", packageImage)
                        e.target.src = "/images/default_package.jpg"
                      }}
                    />
                    <div className="discount">HEMAT {discount}%</div>
                  </div>
  
                  {/* Konten */}
                  <div className="content">
                    <h3>{pkg.name}</h3>
                    <p>{pkg.description}</p>
  
                    {/* Fitur */}
                    <div className="features">
                      <h4>Yang Anda Dapatkan:</h4>
                      <ul>
                        {features.map((feature, index) => (
                          <li key={index}>
                            <span className="check">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
  
                    {/* Harga */}
                    <div className="price">
                      <span className="old-price">{formatPrice(originalPrice)}</span>
                      <span className="new-price">{formatPrice(pkg.price)}</span>
                    </div>
  
                    {/* Tombol - Navigate ke transaction */}
                    <button
                      className="select-btn"
                      onClick={() => handleSelectPackage(pkg)}
                      style={{ cursor: "pointer" }} // Pastikan cursor pointer
                    >
                      Pilih Paket Ini
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }