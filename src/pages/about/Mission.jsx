import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";
import backgroundImg from "../../assets/rabbiClass.jpeg";
import "./Mission.css";

function Mission() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="mission-page"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="mission-card">
        <h2 className="mission-title">{t.missionTitle}</h2>
        <div className="mission-divider" />
        <p className="mission-text">{t.missionText}</p>
      </div>
    </div>
  );
}

export default Mission;