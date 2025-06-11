"use client"

import { useParams, useNavigate } from "react-router-dom"
import "../../styles/CategoryPackage.css";

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
  {
    id: 2,
    name: "Paket Wedding Rustic",
    description: "Venue outdoor + Dekorasi kayu + Dokumentasi half day",
    image: "/wedding_rustic.jpg",
    price: 10000000,
    originalPrice: 14000000,
    categories_id: 1,
    features: ["Venue Outdoor", "Dekorasi Kayu Rustic", "Dokumentasi Half Day", "Catering 80 pax", "Sound System"],
  },
  {
    id: 3,
    name: "Paket Wedding Classic",
    description: "Venue ballroom + Dekorasi klasik + Dokumentasi full day",
    image: "/wedding_classic.jpg",
    price: 13000000,
    originalPrice: 18200000,
    categories_id: 1,
    features: ["Venue Ballroom", "Dekorasi Klasik Elegan", "Dokumentasi Full Day", "Catering 120 pax", "Live Music"],
  },
  {
    id: 4,
    name: "Paket Wedding Outdoor Elegan",
    description: "Taman outdoor + Dekorasi elegan + Dokumentasi drone",
    image: "/wedding_outdoor.jpg",
    price: 14000000,
    originalPrice: 19600000,
    categories_id: 1,
    features: ["Taman Outdoor Premium", "Dekorasi Elegan", "Dokumentasi Drone", "Catering 150 pax", "Wedding Planner"],
  },

  // Birthday Packages (Category 2)
  {
    id: 5,
    name: "Paket Ulang Tahun Aesthetic",
    description: "Dekorasi ala Pinterest + Neon Sign",
    image: "/birthday_aesthetic.jpeg",
    price: 3000000,
    originalPrice: 4200000,
    categories_id: 2,
    features: [
      "Dekorasi Pinterest Style",
      "Neon Sign Custom",
      "Backdrop Aesthetic",
      "Snack Box 30 pax",
      "Photographer",
    ],
  },
  {
    id: 6,
    name: "Paket Ulang Tahun Tema Kartun",
    description: "Dekorasi karakter + Balon warna-warni",
    image: "/birthday_cartoon.jpg",
    price: 2500000,
    originalPrice: 3500000,
    categories_id: 2,
    features: ["Dekorasi Karakter", "Balon Warna-warni", "Kostum Karakter", "Snack Box 25 pax", "Games & Hiburan"],
  },
  {
    id: 7,
    name: "Paket Ulang Tahun Minimalis",
    description: "Dekorasi sederhana + Kue custom",
    image: "/birthday_minimalist.jpg",
    price: 2000000,
    originalPrice: 2800000,
    categories_id: 2,
    features: ["Dekorasi Minimalis", "Kue Custom", "Setup Sederhana", "Snack Box 20 pax", "Basic Photography"],
  },
  {
    id: 8,
    name: "Paket Ulang Tahun Outdoor",
    description: "Lokasi taman + Permainan anak + Snack box",
    image: "/birthday_outdoor.jpg",
    price: 3500000,
    originalPrice: 4900000,
    categories_id: 2,
    features: ["Lokasi Taman", "Permainan Anak", "Snack Box 35 pax", "Outdoor Games", "MC & Entertainer"],
  },

  // Corporate/Concert Packages (Category 3)
  {
    id: 9,
    name: "Paket Konser Musik Full Package",
    description: "Stage + Sound system + Lighting + MC",
    image: "/concert_full.jpg",
    price: 15000000,
    originalPrice: 21000000,
    categories_id: 3,
    features: ["Stage Professional", "Sound System Premium", "Lighting Show", "MC Professional", "Security Team"],
  },
  {
    id: 10,
    name: "Paket Event Outdoor",
    description: "Tenda besar + Sound system + Panggung minimalis",
    image: "/event_outdoor.jpg",
    price: 9000000,
    originalPrice: 12600000,
    categories_id: 3,
    features: ["Tenda Besar", "Sound System", "Panggung Minimalis", "Lighting Basic", "Event Coordinator"],
  },
  {
    id: 11,
    name: "Paket Webinar Premium",
    description: "MC Online + Zoom Hosting + Backdrop",
    image: "/corporate_webinar.jpg",
    price: 5000000,
    originalPrice: 7000000,
    categories_id: 3,
    features: ["MC Online Professional", "Zoom Hosting", "Backdrop Premium", "Technical Support", "Recording Service"],
  },
  {
    id: 12,
    name: "Paket Pertunjukan Seni",
    description: "Dekorasi tema + Sound system + Lighting artistik",
    image: "/arts_performance.jpg",
    price: 12000000,
    originalPrice: 16800000,
    categories_id: 3,
    features: ["Dekorasi Tema Seni", "Sound System", "Lighting Artistik", "Stage Design", "Art Director"],
  },
  {
    id: 13,
    name: "Paket Hiburan Mini",
    description: "MC + Musik live akustik + Dekorasi sederhana",
    image: "/mini_entertainment.jpg",
    price: 7000000,
    originalPrice: 9800000,
    categories_id: 3,
    features: ["MC Professional", "Musik Live Akustik", "Dekorasi Sederhana", "Sound System Basic", "Event Assistant"],
  },

  // Graduation Packages (Category 4)
  {
    id: 14,
    name: "Paket Graduation Garden Party",
    description: "Outdoor setup + Foto Booth + Snack Table",
    image: "/graduation_garden.jpeg",
    price: 5500000,
    originalPrice: 7700000,
    categories_id: 4,
    features: ["Outdoor Setup", "Foto Booth", "Snack Table", "Dekorasi Wisuda", "Photography Service"],
  },
  {
    id: 15,
    name: "Paket Graduation Indoor",
    description: "Dekorasi aula + Musik live + Catering",
    image: "/graduation_indoor.jpg",
    price: 6000000,
    originalPrice: 8400000,
    categories_id: 4,
    features: ["Dekorasi Aula", "Musik Live", "Catering 50 pax", "Sound System", "Event Coordinator"],
  },
  {
    id: 16,
    name: "Paket Graduation Simple",
    description: "Dekorasi minimalis + Kue ulang tahun",
    image: "/graduation_simple.jpg",
    price: 4000000,
    originalPrice: 5600000,
    categories_id: 4,
    features: ["Dekorasi Minimalis", "Kue Custom", "Setup Sederhana", "Basic Photography", "Small Catering"],
  },
  {
    id: 17,
    name: "Paket Graduation Themed Party",
    description: "Tema vintage + Live band + Photobooth",
    image: "/graduation_themed.jpg",
    price: 7000000,
    originalPrice: 9800000,
    categories_id: 4,
    features: ["Tema Vintage", "Live Band", "Photobooth Premium", "Catering 60 pax", "Professional MC"],
  },

  // Engagement Packages (Category 5)
  {
    id: 18,
    name: "Paket Engagement Bohemian",
    description: "Tema rustic + Lampu gantung + Standing Flowers",
    image: "/engagement_boho.jpeg",
    price: 6000000,
    originalPrice: 8400000,
    categories_id: 5,
    features: ["Tema Rustic Bohemian", "Lampu Gantung", "Standing Flowers", "Catering Intimate", "Photography"],
  },
  {
    id: 19,
    name: "Paket Engagement Classic",
    description: "Dekorasi elegan + Musik akustik",
    image: "/engagement_classic.jpeg",
    price: 6500000,
    originalPrice: 9100000,
    categories_id: 5,
    features: ["Dekorasi Elegan", "Musik Akustik", "Setup Classic", "Catering 40 pax", "Professional Photography"],
  },
  {
    id: 20,
    name: "Paket Engagement Modern",
    description: "Dekorasi minimalis + Foto profesional",
    image: "/engagement_modern.jpg",
    price: 5500000,
    originalPrice: 7700000,
    categories_id: 5,
    features: ["Dekorasi Minimalis Modern", "Foto Profesional", "Setup Contemporary", "Light Catering", "Videography"],
  },
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
  const categoryName = categoryNames[categoryId] || "Unknown Category"

  const handleSelectPackage = (pkg) => {
    navigate("/transaksi", { state: { package: pkg } })
  }

  return (
    <section className="category-package-section">
      <div className="container">
        <div className="category-header">
          <button className="back-btn-small" onClick={() => navigate("/services")}>
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
                  <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="package-image" />
                  <div className="package-discount">HEMAT {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%</div>
                </div>

                <div className="package-content">
                  <h3 className="package-name">{pkg.name}</h3>
                  <p className="package-description">{pkg.description}</p>

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

                  <div className="package-pricing">
                    <span className="original-price">Rp {pkg.originalPrice.toLocaleString()}</span>
                    <span className="current-price">Rp {pkg.price.toLocaleString()}</span>
                  </div>

                  <button onClick={() => handleSelectPackage(pkg)} className="select-package-btn">
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
