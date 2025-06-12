// import "./App.css";
// import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Service from "./pages/service";
import Login from "./pages/login";
import CategoryPackages from "./components/user/CategoryPackages";

import Dashboard from "./pages/admin/dashboard";
import DUser from "./pages/admin/dUser";
import DAdmin from "./pages/admin/dAdmin";
import DKategori from "./pages/admin/dKategori";
import DPackage from "./pages/admin/dPackage";
import DTransaksi from "./pages/admin/dTransaksi";
import DKonfirmasi from "./pages/admin/dLaporan";



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
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* ADMIN ROUTES */}
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
        <Route
          path="/admin/transaksi"
          element={
            <AdminLayout>
              <DTransaksi />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/transaksi"
          element={
            <AdminLayout>
              <DKonfirmasi />
            </AdminLayout>
          }
        />

        {/* USER ROUTES */}
        <Route
          path="/"
          element={
            <UserLayout
              isLoggedIn={isLoggedIn}
              username={username}
              onLogout={handleLogout}
            >
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/home"
          element={
            <UserLayout
              isLoggedIn={isLoggedIn}
              username={username}
              onLogout={handleLogout}
            >
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <UserLayout
              isLoggedIn={isLoggedIn}
              username={username}
              onLogout={handleLogout}
            >
              <Contact />
            </UserLayout>
          }
        />
        <Route
          path="/about"
          element={
            <UserLayout
              isLoggedIn={isLoggedIn}
              username={username}
              onLogout={handleLogout}
            >
              <About />
            </UserLayout>
          }
        />
        <Route
          path="/service"
          element={
            <UserLayout
              isLoggedIn={isLoggedIn}
              username={username}
              onLogout={handleLogout}
            >
              <Service />
            </UserLayout>
          }
        />
        <Route
          path="/login"
          element={
            <UserLayout
              isLoggedIn={isLoggedIn}
              username={username}
              onLogout={handleLogout}
            >
              <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
            </UserLayout>
          }
        />
        <Route
          path="/kategori/:id"
          element={
            <UserLayout
              isLoggedIn={isLoggedIn}
              username={username}
              onLogout={handleLogout}
            >
              <CategoryPackages />
            </UserLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;