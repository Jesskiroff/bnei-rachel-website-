import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "./assets/bnei_rachel_logo.jpeg";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  function handleMouseEnter(menu) {
    setOpenDropdown(menu);
  }

  function handleMouseLeave() {
    setOpenDropdown(null);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }

  return (
    <nav className="navbar">

      {/* Logo on the far left */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Bnei Rachel Logo" />
        </Link>
      </div>

      {/* Hamburger button — mobile only */}
      <button
        className="hamburger-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Center links */}
      <ul className="nav-links desktop-nav">

        <li><Link to="/">{t.home}</Link></li>

        <li onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
          <Link to="/about">{t.about}</Link>
          {openDropdown === "about" && (
            <ul className="dropdown">
              <li><Link to="/about/mission">{t.mission}</Link></li>
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

      </ul>

      {/* Right side — Donate and Language */}
      <div className="navbar-right desktop-nav">
        <Link to="/donate" className="donate-btn">{t.donate}</Link>
        <button className="language-btn" onClick={toggleLanguage}>
          {language === "en" ? "🇮🇱 עברית" : "🇺🇸 English"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">

          <Link to="/" onClick={closeMobileMenu}>{t.home}</Link>

          <Link to="/about" onClick={closeMobileMenu}>{t.about}</Link>
          <div className="mobile-submenu">
            <Link to="/about/mission" onClick={closeMobileMenu}>{t.mission}</Link>
            <Link to="/about/photos" onClick={closeMobileMenu}>{t.photos}</Link>
          </div>

          <Link to="/program" onClick={closeMobileMenu}>{t.program}</Link>
          <div className="mobile-submenu">
            <Link to="/program/host-event" onClick={closeMobileMenu}>{t.hostEvent}</Link>
            <Link to="/program/schedule" onClick={closeMobileMenu}>{t.schedule}</Link>
          </div>

          <Link to="/shiurs" onClick={closeMobileMenu}>{t.shiurs}</Link>
          <div className="mobile-submenu">
            <Link to="/shiurs/live-classes" onClick={closeMobileMenu}>{t.liveClasses}</Link>
            <Link to="/shiurs/recorded-classes" onClick={closeMobileMenu}>{t.recordedClasses}</Link>
          </div>

          <Link to="/contact" onClick={closeMobileMenu}>{t.contact}</Link>
          <Link to="/donate" className="mobile-donate-btn" onClick={closeMobileMenu}>{t.donate}</Link>

          <button className="language-btn mobile-lang-btn" onClick={() => { toggleLanguage(); closeMobileMenu(); }}>
            {language === "en" ? "🇮🇱 עברית" : "🇺🇸 English"}
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;