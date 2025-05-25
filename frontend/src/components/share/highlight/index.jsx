export default function Highlight() {
    return (
        <section className="container my-5">
            <h2 className="text-center mb-4">Fitur Unggulan Kami</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card text-center">
                        <div className="mt-4">
                            <i className="fa-solid fa-calendar-check fa-2x mb-3 text-primary"></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Kelola Event</h5>
                            <p className="card-text">Mengelola event dengan mudah dan terstruktur.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-center">
                        <div className="mt-4">
                            <i className="fa-solid fa-credit-card fa-2x mb-3 text-primary"></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Transaksi Mudah</h5>
                            <p className="card-text">Proses pembayaran dan transaksi yang aman dan cepat.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-center">
                        <div className="mt-4">
                            <i className="fa-solid fa-chart-line fa-2x mb-3 text-primary"></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Laporan Otomatis</h5>
                            <p className="card-text">Dapatkan laporan event dan transaksi secara otomatis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}