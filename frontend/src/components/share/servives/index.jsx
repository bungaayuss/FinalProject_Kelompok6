// export default function Services() {
//     return (
//         <section
//             id="services"
//             style={{
//                 backgroundImage: "url('/BgFlower.png')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 minHeight: "100vh",
//                 width: "100%",
//                 padding: "0",
//                 paddingTop: "100px", 
//             }}
//         >
//             <div className="container py-5">
//                 <h2
//                     className="text-center mb-4"
//                     style={{
//                         color: "#FFFFFF",
//                         fontFamily: "Poppins, sans-serif",
//                         fontWeight: 700,
//                         letterSpacing: "1px",
//                         marginBottom: "24px",
//                         fontSize: "3rem",
//                         textShadow: "0 2px 16px rgba(0,0,0,0.18)"
//                     }}
//                 >
//                     Services & Packages
//                 </h2>
//                 <div className="row justify-content-center">
//                     {/* Layanan */}
//                     <div className="col-md-6 mb-4">
//                         <div className="card shadow-sm h-100">
//                             <div className="card-body" style={{ background: "rgba(255, 255, 255, 0.32)", borderRadius: 12 }}>
//                                 <h4 className="card-title" style={{ color: "#1C57BC", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Layanan Kami</h4>
//                                 <ul style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, color: "#333", fontSize: "1rem", paddingLeft: 24 }}>
//                                     <li style={{ marginBottom: 8 }}>Event Organizer (EO) Online & Offline</li>
//                                     <li style={{ marginBottom: 8 }}>Seminar & Workshop</li>
//                                     <li style={{ marginBottom: 8 }}>Konser Musik & Pagelaran</li>
//                                     <li style={{ marginBottom: 8 }}>Bazaar & Expo</li>
//                                     <li style={{ marginBottom: 8 }}>Outbound & Team Building</li>
//                                     <li style={{ marginBottom: 8 }}>Wisuda & Graduation Event</li>
//                                     <li style={{ marginBottom: 8 }}>Reuni & Family Gathering</li>
//                                     <li style={{ marginBottom: 8 }}>Event Anak Sekolah/Kampus</li>
//                                     <li style={{ marginBottom: 8 }}>Pernikahan Online/Offline</li>
//                                     <li style={{ marginBottom: 8 }}>Custom Event sesuai kebutuhan</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Paket */}
//                     <div className="col-md-6 mb-4">
//                         <div className="card shadow-sm h-100">
//                             <div className="card-body" style={{ background: "rgba(255, 255, 255, 0.32)", borderRadius: 12 }}>
//                                 <h4 className="card-title" style={{ color: "#1C57BC", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Paket Pilihan</h4>
//                                 <ul style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, color: "#333", fontSize: "1rem", paddingLeft: 24 }}>
//                                     <li style={{ marginBottom: 8 }}><b>Paket Silver</b>: Basic event management, dekorasi standar, MC & dokumentasi</li>
//                                     <li style={{ marginBottom: 8 }}><b>Paket Gold</b>: Semua di Silver + konsep kreatif, sound system, konsumsi, publikasi digital</li>
//                                     <li style={{ marginBottom: 8 }}><b>Paket Platinum</b>: Semua di Gold + venue premium, entertainment, live streaming, aftermovie</li>
//                                     <li style={{ marginBottom: 8 }}><b>Paket Custom</b>: Konsultasi & penyesuaian kebutuhan event Anda</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Modern Wedding", image: "/paket1.jpg" },
    { id: 2, name: "Aesthetic Birthday", image: "/paket2.jpeg" },
    { id: 3, name: "Corporate Event", image: "/paket3.jpeg" },
    { id: 4, name: "Graduation Party", image: "/paket4.jpg" },
    { id: 5, name: "Rustic Engagement", image: "/paket5.jpg" },
  ];

  const handleBooking = (categoryId) => {
    navigate(`/kategori/${categoryId}`);
  };

  return (
    <section
      id="services"
      style={{
        backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    paddingTop: "100px",
    paddingBottom: "50px",
  }}
>
  <div className="container">
    <h2
      className="text-center mb-5"
      style={{
        color: "#1C57BC",
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontSize: "3.2rem",
        letterSpacing: "1px",
      }}
    >
      Services & Packages
    </h2>

    {/* Kategori Event */}
    <h4
      className="text-dark mb-4"
      style={{
        fontWeight: 500,
        fontFamily: "'Nunito Sans', sans-serif",
        fontSize: "1.3rem",
        color: "#444",
      }}
    >
      Pilih Kategori Event
    </h4>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {categories.map((cat) => (
            <div className="col" key={cat.id}>
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div
                  className="card-body text-center"
                  style={{ padding: "25px" }}
                >
                  <h5
                    className="card-title mb-3"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      color: "#333",
                    }}
                  >
                    {cat.name}
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
                    onClick={() => handleBooking(cat.id)}
                  >
                    Booking Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


