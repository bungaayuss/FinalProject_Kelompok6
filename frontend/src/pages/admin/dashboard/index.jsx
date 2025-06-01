
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../../components/admin/sidebar";
import Topbar from "../../../components/admin/topbar";
import StatCard from "../../../components/admin/statcard";
import TableCard from "../../../components/admin/table";
import DetailModal from "../../../components/admin/detailModal";
import { FaUsers, FaCalendarCheck, FaClock } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { SideCard1 } from "../../../components/admin/sidecard";
import NotifikasiCard from "../../../components/admin/notifcard";
import "../../../index.css";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaksi, setSelectedTransaksi] = useState(null);

  const handleDetail = (event) => {
    alert(`Detail event: ${event.nama}`);
    setSelectedTransaksi(event);
    setShowModal(true);
  };

  const topPakets = [
    { paketName: "Paket A", percentage: 55 },
    { paketName: "Paket B", percentage: 30 },
    { paketName: "Paket C", percentage: 15 },
  ];

  const columns = ["ID", "Nama Event", "Total", "Status", "Tanggal"];
  const data = [
    {
      id: "TRX001",
      "nama event": "Konser Musik",
      total: "Rp 500.000",
      status: "Lunas",
      tanggal: "2025-05-27",
    },
    {
      id: "TRX002",
      "nama event": "Workshop Coding",
      total: "Rp 250.000",
      status: "Menunggu",
      tanggal: "2025-05-28",
    },
  ];

  return (
    <div
      className="d-flex"
      style={{  minHeight: "100vh" }}
    >
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar />
        <div className="p-4">
          <div className="row g-3">
            <div className="col-md-4">
              <StatCard
                icon={<FaCalendarCheck size={24} />}
                title="Total Event"
                count={1081}
              />
            </div>
            <div className="col-md-4">
              <StatCard
                icon={<FaClock size={24} />}
                title="Pending Event"
                count={120}
              />
            </div>
            <div className="col-md-4">
              <StatCard
                icon={<FaUsers size={24} />}
                title="Total User"
                count={305}
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-8">
              <TableCard
                title="Daftar Event"
                columns={columns}
                data={data}
                renderAction={(event) => (
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleDetail(event)}
                    title="Detail"
                  >
                    <FaInfoCircle />
                  </button>
                )}
              />
            </div>

            <div className="col-md-4">
              <SideCard1 data={topPakets} />
              <NotifikasiCard
                data={[
                  {
                    id: "TRX003",
                    event: "Seminar Bisnis",
                    status: "Menunggu konfirmasi",
                  },
                  {
                    id: "TRX004",
                    event: "Talkshow Startup",
                    status: "Menunggu konfirmasi",
                  },
                  {
                    id: "TRX005",
                    event: "Festival Seni",
                    status: "Menunggu konfirmasi",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <DetailModal
          transaksi={selectedTransaksi}
          onClose={() => {
            setShowModal(false);
            setSelectedTransaksi(null);
          }}
        />
      )}
    </div>
  );
}
