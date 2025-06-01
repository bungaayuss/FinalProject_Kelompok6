import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from './pages/home/index.jsx';
import Contact from './pages/contact/index.jsx';
import About from './pages/about/index.jsx';
import Service from './pages/service/index.jsx';
import Login from './pages/login/index.jsx';
import Header from './components/user/header/index.jsx';  // pastikan path sesuai
import CategoryPackages from './components/user/CategoryPackages.jsx';

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
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
          <Route path="/kategori/:id" element={<CategoryPackages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
