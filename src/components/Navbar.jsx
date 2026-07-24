import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span>⬢ North</span>Peak
        Digital
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="nav-btn">
        Get Started
      </button>
    </header>
  );
}

export default Navbar;