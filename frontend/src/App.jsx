import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// Halaman user
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Login from "./pages/login";
import Services from "./components/share/servives";
import CategoryPackage from "./components/user/CategoryPackages";
import Transaction from "./components/user/Transaction";

// Dashboard user
import DashboardLayout from "./components/user/dashboard/dashboardLayout";
import Notifikasi from "./components/user/dashboard/Notifikasi";
import Profile from "./components/user/dashboard/Profile";
// import Transaksi from "./components/user/dashboard/Transaksi";

// Admin
import Dashboard from "./pages/admin/dashboard";
import DUser from "./pages/admin/dUser";
import DAdmin from "./pages/admin/dAdmin";
import DKategori from "./pages/admin/dKategori";
import DPackage from "./pages/admin/dPackage";

// Layout
import UserLayout from "./layout/user";
import AdminLayout from "./layout/admin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    const storedUsername = localStorage.getItem("username");

    setIsLoggedIn(loginStatus);
    setUsername(storedUsername || "");
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminLayout>
              <DUser />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/admin"
          element={
            <AdminLayout>
              <DAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/kategori"
          element={
            <AdminLayout>
              <DKategori />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/package"
          element={
            <AdminLayout>
              <DPackage />
            </AdminLayout>
          }
        />

        {/* User Routes */}
        <Route
          path="/"
          element={
            <UserLayout isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/home"
          element={
            <UserLayout isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <UserLayout isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}>
              <Contact />
            </UserLayout>
          }
        />
        <Route
          path="/about"
          element={
            <UserLayout isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}>
              <About />
            </UserLayout>
          }
        />
        <Route
          path="/service"
          element={
            <UserLayout isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}>
              <Services />
            </UserLayout>
          }
        />
        <Route
          path="/kategori/:id"
          element={
            <UserLayout isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}>
              <CategoryPackage />
            </UserLayout>
          }
        />
        <Route
          path="/transaksi"
          element={
            <UserLayout isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}>
              <Transaction />
            </UserLayout>
          }
        />
        <Route
          path="/login"
          element={
            <UserLayout isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout}>
              <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
            </UserLayout>
          }
        />

        {/* User Dashboard Routes */}
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="transaksi" element={<Transaksi />} />
          <Route path="notifikasi" element={<Notifikasi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
