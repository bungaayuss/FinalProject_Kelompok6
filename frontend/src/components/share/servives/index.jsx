import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPackages } from "../../../_services/packages";

export default function Services() {
  const navigate = useNavigate();

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [packagesData] = await Promise.all([getPackages()]);
      setPackages(packagesData);
    };

    fetchData();
  }, []);

  const handleBooking = (packageId) => {
    navigate(`/kategori/${packageId}`);
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
          {packages.map((packages) => (
            <div className="col" key={packages.id}>
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                <img
                  src={packages.image}
                  alt={packages.name}
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
                    {packages.name}
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
                    onClick={() => handleBooking(packages.id)}
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
