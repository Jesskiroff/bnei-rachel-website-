import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "./assets/bnei_rachel_logo.jpeg";

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
       <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Bnei Rachel Logo" /></Link>
      </div>
      <ul className="nav-links">

        <li onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
          <Link to="/about">ABOUT</Link>
          {openDropdown === "about" && (
            <ul className="dropdown">
              <li><Link to="/about/mission">Mission Statement</Link></li>
              <li><Link to="/about/location">Location</Link></li>
              <li><Link to="/about/photos">Photos</Link></li>
            </ul>
          )}
        </li>

        <li onMouseEnter={() => handleMouseEnter("program")} onMouseLeave={handleMouseLeave}>
          <Link to="/program">PROGRAM</Link>
          {openDropdown === "program" && (
            <ul className="dropdown">
              <li><Link to="/program/schedule">Weekly Schedule</Link></li>
              <li><Link to="/program/calendar">Calendar</Link></li>
              <li><Link to="/program/host-event">Host Your Event at BRY</Link></li>
            </ul>
          )}
        </li>

        <li onMouseEnter={() => handleMouseEnter("faculty")} onMouseLeave={handleMouseLeave}>
          <Link to="/faculty">FACULTY</Link>
          {openDropdown === "faculty" && (
            <ul className="dropdown">
              <li><Link to="/faculty/administration">Administration</Link></li>
              <li><Link to="/faculty/staff">Staff</Link></li>
              <li><Link to="/faculty/guest-speakers">Guest Speakers</Link></li>
            </ul>
          )}
        </li>


        <li onMouseEnter={() => handleMouseEnter("shiurs")} onMouseLeave={handleMouseLeave} >
            <Link to="/shiurs">SHIURS</Link>
            {openDropdown === "shiurs" && (
                <ul className="dropdown">
                <li><Link to="/shiurs/live-classes">Live Classes</Link></li>
                <li><Link to="/shiurs/recorded-classes">Recorded Classes</Link></li>
              </ul>
            )}
        </li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <li><Link to="/donate" className="donate-btn">Donate</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;