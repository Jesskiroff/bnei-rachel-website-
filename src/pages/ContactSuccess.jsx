import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import "./ContactSuccess.css";

function ContactSuccess() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="contact-success-page">
      <div className="contact-success-card">
        <div className="contact-success-icon">✉️</div>
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