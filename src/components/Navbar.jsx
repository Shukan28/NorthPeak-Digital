import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <p><span>⬢ North</span>Peak</p> Digital
      </div>
      <nav>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#process" onClick={() => setMenuOpen(false)}>Process</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
      <a href="#contact" className="nav-btn">
        Get Started
      </a>
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ position: "relative", zIndex: 3000 }}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Navbar;