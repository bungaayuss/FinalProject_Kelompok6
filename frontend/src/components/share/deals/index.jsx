import React, { useEffect, useState } from "react";
import "../../../styles/deals.css";
// import { useNavigate } from "react-router";
import { getPackages } from "../../../_services/packages";

export default function Deals() {
  // const navigate = useNavigate();

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [packagesData] = await Promise.all([getPackages()]);
      setPackages(packagesData.slice(0, 3));
    };

    fetchData();
  }, []);

  return (
    <section className="container my-5 deals-section">
      <h2 className="text-center fw-bold text-primary-custom mb-4">
        Our Event Packages
      </h2>
      <div className="row justify-content-center gx-4 gy-5">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="col-sm-8 col-md-5 col-lg-4"
            style={{ maxWidth: "350px" }}
          >
            <div className="card card-deal h-100">
              {pkg.image && <img src={pkg.image} alt={pkg.name} />}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{pkg.name}</h5>
                {Array.isArray(pkg.description) ? (
                  <ul>
                    {pkg.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{pkg.description}</p> // fallback kalau bukan array
                )}

                <div className="price">
                  Rp {pkg.price.toLocaleString("id-ID")}
                </div>
                <button className="select-btn">Booking Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}