export default function Hero() {
    return (
        <div
            id="home"
            style={{
                minHeight: "100vh",
                width: "100%",
                backgroundImage: "url('/BgFlower.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Poppins', sans-serif",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <div style={{ textAlign: "center" }}>
                <h1
                    style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "2.5rem",
                        textShadow: "0 2px 16px rgba(0,0,0,0.25)",
                        // background: "rgba(20,48,92,0.3)",
                        padding: "32px 24px 24px 24px",
                        borderRadius: "16px",
                        fontFamily: "'Poppins', sans-serif",
                        marginBottom: "24px"
                    }}
                >
                    MAKE YOU’RE BEAUTIFUL MOMENT WITH <br /> EVENT PORA
                </h1>
                <hr style={{
                    border: "none",
                    borderTop: "4px solid #fff",
                    width: "180px",
                    margin: "0 auto"
                }} />
            </div>
        </div>
    );
}