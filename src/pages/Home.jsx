import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import HeroSlider from "../HeroSlider";
import VideoModal from "../VideoModal";
import backgroundImg from "../assets/farmPic.jpeg";
import "./Home.css";

function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="home-page"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <HeroSlider />

      {/* Watch Our Story Button */}
      <div className="watch-story-section">
        <h2 className="home-welcome">{t.welcomeTitle}</h2>
        <p className="home-subtitle">{t.welcomeSubtitle}</p>
        <button
          className="watch-story-btn"
          onClick={() => setShowVideo(true)}
        >
          ▶ {t.watchOurStory}
        </button>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <VideoModal onClose={() => setShowVideo(false)} />
      )}
    </div>
  );
}

export default Home;