export default function Testimony() {
    return (
        <section className="bg-light py-5" style={{ marginBottom: "100px" }}>
            <div className="container">
                <h4 className="text-center mb-4">Apa Kata Mereka?</h4>
                <div className="row justify-content-center">
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <blockquote className="blockquote text-center mb-0">
                                    <p className="mb-3" style={{ fontSize: "0.95rem" }}>
                                        "Event Pora sangat membantu event kampus kami jadi lebih profesional!"
                                    </p>
                                    <footer className="blockquote-footer mt-2" style={{ fontSize: "0.85rem" }}>Bella, Mahasiswa</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <blockquote className="blockquote text-center mb-0">
                                    <p className="mb-3" style={{ fontSize: "0.95rem" }}>
                                        "Transaksi dan laporan jadi lebih mudah dan transparan."
                                    </p>
                                    <footer className="blockquote-footer mt-2" style={{ fontSize: "0.85rem" }}>Bunga, EO</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <blockquote className="blockquote text-center mb-0">
                                    <p className="mb-3" style={{ fontSize: "0.95rem" }}>
                                        "Pelayanan cepat, fitur lengkap, sangat direkomendasikan untuk penyelenggara event."
                                    </p>
                                    <footer className="blockquote-footer mt-2" style={{ fontSize: "0.85rem" }}>Natasya, Organizer</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <blockquote className="blockquote text-center mb-0">
                                    <p className="mb-3" style={{ fontSize: "0.95rem" }}>
                                        "User interface mudah dipahami, supportnya juga responsif."
                                    </p>
                                    <footer className="blockquote-footer mt-2" style={{ fontSize: "0.85rem" }}>Rina, Freelancer</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}