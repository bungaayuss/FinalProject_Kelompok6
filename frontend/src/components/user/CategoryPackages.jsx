import { useParams, useNavigate } from "react-router-dom";

const allPackages = [
  {
    id: 1,
    name: "Paket Wedding Modern Glam",
    description: "Venue indoor dengan dekorasi glamor, lengkap dengan dokumentasi full day.",
    image: "/paket1.jpg",
    price: 12000000,
    categories_id: 1,
  },
  {
    id: 2,
    name: "Paket Ulang Tahun Aesthetic",
    description: "Dekorasi cantik ala Pinterest, dilengkapi dengan Neon Sign eksklusif.",
    image: "/paket2.jpeg",
    price: 3000000,
    categories_id: 2,
  },
  {
    id: 3,
    name: "Paket Webinar Premium",
    description: "MC profesional, Zoom hosting, dan backdrop menarik untuk acara online Anda.",
    image: "/paket3.jpeg",
    price: 5000000,
    categories_id: 3,
  },
  {
    id: 4,
    name: "Paket Graduation Garden Party",
    description: "Perayaan kelulusan outdoor dengan fotobooth, dekorasi, dan snack table.",
    image: "/paket4.jpg",
    price: 5500000,
    categories_id: 4,
  },
  {
    id: 5,
    name: "Paket Engagement Bohemian",
    description: "Tema rustic bohemian lengkap dengan lampu gantung dan bunga standing.",
    image: "/paket5.jpg",
    price: 6000000,
    categories_id: 5,
  },
];

export default function CategoryPackage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const categoryId = Number(id);

  const packages = allPackages.filter((pkg) => pkg.categories_id === categoryId);

  const handleSelectPackage = (pkg) => {
    navigate("/transaksi", { state: { package: pkg } });
  };

  return (
    <section style={{ padding: "50px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "40px", color: "#333" }}>
        Detail Paket Kategori {categoryId}
      </h2>

      {packages.length === 0 ? (
        <p style={{ fontSize: "1.1rem", color: "#777" }}>
          Maaf, belum ada paket untuk kategori ini.
        </p>
      ) : (
        packages.map((pkg) => (
          <div
            key={pkg.id}
            style={{
              display: "flex",
              gap: "30px",
              marginBottom: "50px",
              padding: "30px",
              borderRadius: "14px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
              background: "#f8f9fa",
              alignItems: "center",
            }}
          >
            <div style={{ flex: "1 1 30%", minWidth: "150px" }}>
              <img
                src={pkg.image}
                alt={pkg.name}
                style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
              />
            </div>

            <div style={{ flex: "2 1 60%", textAlign: "left" }}>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "12px", color: "#222" }}>
                {pkg.name}
              </h3>
              <p style={{ fontSize: "1rem", marginBottom: "18px", color: "#555" }}>
                {pkg.description}
              </p>
              <div style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#999",
                    marginRight: "10px",
                  }}
                >
                  Rp {(pkg.price * 1.4).toLocaleString()}
                </span>
                <span style={{ color: "#E63946", fontWeight: "bold" }}>
                  Rp {pkg.price.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => handleSelectPackage(pkg)}
                style={{
                  padding: "12px 30px",
                  backgroundColor: "#1C57BC",
                  color: "#fff",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#154a9c")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#1C57BC")}
              >
                Pilih Paket
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
