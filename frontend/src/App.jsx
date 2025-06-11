import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from './pages/home/index.jsx';
import Contact from './pages/contact/index.jsx';
import About from './pages/about/index.jsx';
// import Service from './pages/service/index.jsx';
import Login from './pages/login/index.jsx';
import Header from './components/user/header/index.jsx';
import CategoryPackage from './components/user/CategoryPackages.jsx';
import DashboardLayout from './components/user/dashboard/dashboardLayout.jsx';
import Notifikasi from './components/user/dashboard/Notifikasi.jsx';
import Profile from './components/user/dashboard/Profile.jsx';
import Transaksi from './components/user/dashboard/transaksi.jsx';
import Services from './components/share/servives/index.jsx';
import Transaction from './components/user/Transaction.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    const storedUsername = localStorage.getItem("username");

    setIsLoggedIn(loginStatus);
    setUsername(storedUsername || "");
  }, []);

  // Callback untuk logout supaya state berubah di App juga
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  // Callback login bisa diberikan ke halaman Login jika ingin update state App saat login sukses

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
      <div style={{ paddingTop: "90px" }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/kategori/:id" element={<CategoryPackage />} />
          <Route path="/transaksi" element={<Transaction />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
        
          {/* {isLoggedIn && ( */}
          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="transaksi" element={<Transaksi />} />
            <Route path="notifikasi" element={<Notifikasi />} />
          </Route>
          {/* // )} */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
