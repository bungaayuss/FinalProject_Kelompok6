export default function Services() {
    return (
        <section
            id="services"
            style={{
                backgroundImage: "url('/BgFlower.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                width: "100%",
                padding: "0",
                paddingTop: "100px", 
            }}
        >
            <div className="container py-5">
                <h2
                    className="text-center mb-4"
                    style={{
                        color: "#FFFFFF",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        marginBottom: "24px",
                        fontSize: "3rem",
                        textShadow: "0 2px 16px rgba(0,0,0,0.18)"
                    }}
                >
                    Services & Packages
                </h2>
                <div className="row justify-content-center">
                    {/* Layanan */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body" style={{ background: "rgba(255, 255, 255, 0.32)", borderRadius: 12 }}>
                                <h4 className="card-title" style={{ color: "#1C57BC", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Layanan Kami</h4>
                                <ul style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, color: "#333", fontSize: "1rem", paddingLeft: 24 }}>
                                    <li style={{ marginBottom: 8 }}>Event Organizer (EO) Online & Offline</li>
                                    <li style={{ marginBottom: 8 }}>Seminar & Workshop</li>
                                    <li style={{ marginBottom: 8 }}>Konser Musik & Pagelaran</li>
                                    <li style={{ marginBottom: 8 }}>Bazaar & Expo</li>
                                    <li style={{ marginBottom: 8 }}>Outbound & Team Building</li>
                                    <li style={{ marginBottom: 8 }}>Wisuda & Graduation Event</li>
                                    <li style={{ marginBottom: 8 }}>Reuni & Family Gathering</li>
                                    <li style={{ marginBottom: 8 }}>Event Anak Sekolah/Kampus</li>
                                    <li style={{ marginBottom: 8 }}>Pernikahan Online/Offline</li>
                                    <li style={{ marginBottom: 8 }}>Custom Event sesuai kebutuhan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Paket */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body" style={{ background: "rgba(255, 255, 255, 0.32)", borderRadius: 12 }}>
                                <h4 className="card-title" style={{ color: "#1C57BC", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Paket Pilihan</h4>
                                <ul style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, color: "#333", fontSize: "1rem", paddingLeft: 24 }}>
                                    <li style={{ marginBottom: 8 }}><b>Paket Silver</b>: Basic event management, dekorasi standar, MC & dokumentasi</li>
                                    <li style={{ marginBottom: 8 }}><b>Paket Gold</b>: Semua di Silver + konsep kreatif, sound system, konsumsi, publikasi digital</li>
                                    <li style={{ marginBottom: 8 }}><b>Paket Platinum</b>: Semua di Gold + venue premium, entertainment, live streaming, aftermovie</li>
                                    <li style={{ marginBottom: 8 }}><b>Paket Custom</b>: Konsultasi & penyesuaian kebutuhan event Anda</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}