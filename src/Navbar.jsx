import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "./assets/bnei_rachel_logo.jpeg";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  function handleMouseEnter(menu) {
    setOpenDropdown(menu);
  }

  function handleMouseLeave() {
    setOpenDropdown(null);
  }

  return (
    <nav className="navbar">

      {/* Left side — Logo + Home */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/"><img src={logo} alt="Bnei Rachel Logo" /></Link>
        </div>
        <Link to="/" className="nav-home-link">{t.home}</Link>
      </div>

      {/* Right side — all other links evenly spread */}
      <ul className="nav-links">

        <li onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
          <Link to="/about">{t.about}</Link>
          {openDropdown === "about" && (
            <ul className="dropdown">
              <li><Link to="/about/mission">{t.mission}</Link></li>
              <li><Link to="/about/location">{t.location}</Link></li>
              <li><Link to="/about/photos">{t.photos}</Link></li>
            </ul>
          )}
        </li>

        <li onMouseEnter={() => handleMouseEnter("program")} onMouseLeave={handleMouseLeave}>
          <Link to="/program">{t.program}</Link>
          {openDropdown === "program" && (
            <ul className="dropdown">
              <li><Link to="/program/host-event">{t.hostEvent}</Link></li>
              <li><Link to="/program/schedule">{t.schedule}</Link></li>
              <li><Link to="/program/calendar">{t.calendar}</Link></li>
            </ul>
          )}
        </li>

        <li onMouseEnter={() => handleMouseEnter("faculty")} onMouseLeave={handleMouseLeave}>
          <Link to="/faculty">{t.faculty}</Link>
          {openDropdown === "faculty" && (
            <ul className="dropdown">
              <li><Link to="/faculty/administration">{t.administration}</Link></li>
              <li><Link to="/faculty/staff">{t.staff}</Link></li>
              <li><Link to="/faculty/guest-speakers">{t.guestSpeakers}</Link></li>
            </ul>
          )}
        </li>

        <li onMouseEnter={() => handleMouseEnter("shiurs")} onMouseLeave={handleMouseLeave}>
          <Link to="/shiurs">{t.shiurs}</Link>
          {openDropdown === "shiurs" && (
            <ul className="dropdown">
              <li><Link to="/shiurs/live-classes">{t.liveClasses}</Link></li>
              <li><Link to="/shiurs/recorded-classes">{t.recordedClasses}</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/contact">{t.contact}</Link></li>

        <li><Link to="/donate" className="donate-btn">{t.donate}</Link></li>

        <li>
          <button className="language-btn" onClick={toggleLanguage}>
            {language === "en" ? "🇮🇱 עברית" : "🇺🇸 English"}
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;