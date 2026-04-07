import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  function handleMouseEnter(menu) {
    setOpenDropdown(menu);
  }

  function handleMouseLeave() {
    setOpenDropdown(null);
  }

  return (
    <nav className="navbar">
      <h1>Bnei Rachel</h1>
      <ul className="nav-links">

        <li onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
          <Link to="/about">About</Link>
          {openDropdown === "about" && (
            <ul className="dropdown">
              <li><Link to="/about/mission">Mission Statement</Link></li>
              <li><Link to="/about/location">Location</Link></li>
              <li><Link to="/about/photos">Photos</Link></li>
            </ul>
          )}
        </li>

        <li onMouseEnter={() => handleMouseEnter("program")} onMouseLeave={handleMouseLeave}>
          <Link to="/program">Program</Link>
          {openDropdown === "program" && (
            <ul className="dropdown">
              <li><Link to="/program/schedule">Weekly Schedule</Link></li>
              <li><Link to="/program/calendar">Calendar</Link></li>
              <li><Link to="/program/host-event">Host Your Event at BRY</Link></li>
            </ul>
          )}
        </li>

        <li onMouseEnter={() => handleMouseEnter("faculty")} onMouseLeave={handleMouseLeave}>
          <Link to="/faculty">Faculty</Link>
          {openDropdown === "faculty" && (
            <ul className="dropdown">
              <li><Link to="/faculty/administration">Administration</Link></li>
              <li><Link to="/faculty/staff">Staff</Link></li>
              <li><Link to="/faculty/guest-speakers">Guest Speakers</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/shiurs">Shiurs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/donate" className="donate-btn">Donate</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;