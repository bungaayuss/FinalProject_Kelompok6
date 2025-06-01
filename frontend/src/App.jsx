// dari sini
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Dashboard from "./pages/admin/dashboard";
import DUser from "./pages/admin/dUser";
import DAdmin from "./pages/admin/dAdmin";
import DKategori from "./pages/admin/dKategori";
import DPackage from "./pages/admin/dPackage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<DUser />} />
        <Route path="/admin/admin" element={<DAdmin />} />
        <Route path="/admin/kategori" element={<DKategori />} />
        <Route path="/admin/package" element={<DPackage />} />
      </Routes>
    </BrowserRouter>
  );
}
