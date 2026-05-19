import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import backgroundImg from "../assets/bryWallLogo.jpeg";
import "./ContactSuccess.css";

function ContactSuccess() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="contact-success-page"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="contact-success-content">
        <div className="contact-success-icon"></div>
        <h1>{t.contactSuccessTitle}</h1>
        <p>{t.contactSuccessMessage}</p>
        <Link to="/" className="contact-success-home-btn">
          {t.backToHome}
        </Link>
      </div>
    </div>
  );
}

export default ContactSuccess;