import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import { Link } from "react-router-dom";
import "./ThankYou.css";

function ThankYou() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="thankyou-page">
      <div className="thankyou-card">
        <div className="thankyou-icon">😄</div>
        <h1>{t.thankYouTitle}</h1>
        <p>{t.thankYouMessage}</p>
        <Link to="/" className="thankyou-home-btn">{t.backToHome}</Link>
      </div>
    </div>
  );
}

export default ThankYou;