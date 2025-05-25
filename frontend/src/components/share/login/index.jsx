import React from "react";

export default function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundImage: "url('/BgFlower.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          padding: "40px 32px",
          minWidth: 320,
          maxWidth: 350,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="/Event.png" alt="Logo" style={{ width: 90, marginBottom: 24 }} />
        <form style={{ width: "100%" }}>
          <div className="mb-3" style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#BC691C",
                fontSize: 18,
              }}
            >
              <i className="fa fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              style={{
                paddingLeft: 38,
                background: "#FFF5D4",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
              }}
            />
          </div>
          <div className="mb-4" style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#BC691C",
                fontSize: 18,
              }}
            >
              <i className="fa fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              style={{
                paddingLeft: 38,
                background: "#FFF5D4",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
              }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              background: "#BC691C",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              letterSpacing: "1px",
              borderRadius: 8,
              padding: "6px 0",
              fontSize: "0.95rem", // diperkecil
              minWidth: 120, // dipendekkan
              maxWidth: 150,
              margin: "0 auto",
              display: "block",
            }}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}