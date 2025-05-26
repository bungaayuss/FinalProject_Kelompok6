// pages/Dashboard.jsx
// import React, { useState } from 'react';
// import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/topbar";
import StatCard from "../../components/admin/statCard";
// import DashboardTable from "../components/admin/table";
// import SummaryPanel from "../components/admin/progressCard";

export default function Dashboard() {
  return (
    <>
      <Topbar />
      <StatCard/>
    </>
  );
}