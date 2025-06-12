import { FaBell, FaSearch } from "react-icons/fa";

export default function Topbar() {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm"
      style={{
        marginTop: "20px",
        marginRight: "20px",
        marginLeft: "20px",
        borderRadius: "15px",
      }}
    >
      <div className="input-group w-50">
        <input type="text" className="form-control" placeholder="Search here" />
        <span className="input-group-text">
          <FaSearch />
        </span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <FaBell />
        <img
          src="https://nolae.eu/cdn/shop/articles/jake-enhypen-profil-873307.jpg?v=1722887800&width=1920"
          className="rounded-circle"
          alt="Profile"
          width="40"
          height="40"
        />
      </div>
    </div>
  );
}
