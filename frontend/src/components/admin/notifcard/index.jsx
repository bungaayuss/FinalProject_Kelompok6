import React from "react";

export default function NotifikasiCard({ data }) {
  return (
    <div
      className="bg-white rounded-4 shadow-sm p-4"
      style={{ marginTop: "25px" }}
    >
      <h6 className="fw-bold text-primary mb-3">Menunggu Konfirmasi</h6>
      {data.length === 0 ? (
        <p className="text-muted mb-0">Tidak ada notifikasi saat ini.</p>
      ) : (
        <ul className="list-unstyled mb-0">
          {data.map((item, index) => (
            <li key={index} className="mb-3 border-bottom pb-2">
              <span
                className="px-2 py-1 bg-primary text-white rounded-2 fw-semibold"
                style={{ fontSize: "0.85rem" }}
              >
                {item.id}
              </span>{" "}
              - {item.event}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
