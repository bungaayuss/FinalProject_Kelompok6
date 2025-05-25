import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/index.jsx';
import Contact from './pages/contact/index.jsx';
import About from './pages/about/index.jsx';
import Service from './pages/service/index.jsx';
import Login from './pages/login/index.jsx';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App