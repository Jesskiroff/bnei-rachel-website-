import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Bnei Rachel</h1>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/faculty">Faculty</Link></li>
      <li><Link to="/program">Program</Link></li>
      <li><Link to="/shiurs">Shiurs</Link></li>
      <li><Link to="/donate">Donate</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;