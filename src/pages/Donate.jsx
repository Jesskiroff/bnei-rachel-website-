import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import "./Donate.css";

function Donate() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="donate-container">
      <div className="donate-hero">
        <h2>{t.donateTitle}</h2>
        <p className="donate-subtitle">{t.donateSubtitle}</p>
        
       <a   href="https://donate.stripe.com/4gw03f9nd8W84qAaEE"
          target="_blank"
          rel="noopener noreferrer"
          className="stripe-donate-btn"
        >
          {t.donate}
        </a>
        <p className="donate-secure-note">
          {language === "en" ? "Secure payment powered by Stripe" : "תשלום מאובטח באמצעות Stripe"}
        </p>
      </div>
    </div>
  );
}

export default Donate;