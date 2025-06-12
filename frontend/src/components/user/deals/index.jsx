import React from "react";
import "../../../styles/deals.css";

export default function Deals() {
  const packages = [
    {
      name: "Paket Wedding Modern Glam",
      description: ["Venue indoor", "Dekorasi glamor", "Dokumentasi full day"],
      image:
        "https://dwpinsider.com/wp-content/uploads/2021/08/jjUntitled-1.jpg",
      price: 12000000,
      categories_id: 1,
    },
    {
      name: "Paket Ulang Tahun Aesthetic",
      description: ["Dekorasi ala Pinterest", "Neon Sign"],
      image:
        "https://media-public.dekoruma.com/article/2025/04/Dekorasi-Ulang-Tahun-FIMG.webp",
      price: 3000000,
      categories_id: 2,
    },
    {
      name: "Paket Graduation Garden Party",
      description: ["Outdoor setup", "Foto Booth", "Snack Table"],
      image:
        "https://www.lulus.com/blog/wp-content/uploads/2021/04/Grad-Experience-Hero1.jpg",
      price: 5500000,
      categories_id: 4,
    },
  ];

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
                <ul>
                  {pkg.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
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
