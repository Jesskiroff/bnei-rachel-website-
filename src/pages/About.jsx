import { useLanguage } from '../LanguageContext';
import translations from '../translations';
import aboutImg from '../assets/rabbiClass.jpeg';
import img2 from '../assets/logo_on_wall_from_far.jpeg';
import img3 from '../assets/twoBoys.jpeg';
import img4 from '../assets/learning.jpeg';
import './About.css';

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
          <h1>About Us</h1>

      <div className="about-container">

        {/* Section 1 — Image Left, Text Right */}
        <div className="about-section image-left">
          <div className="about-image-wrap">
            <img src={aboutImg} alt="About Bnei Rachel" />
          </div>
          <div className="about-text-wrap">
            <h2>{t.aboutSection1Title}</h2>
            <p>{t.aboutSection1Text}</p>
          </div>
        </div>

        {/* Section 2 — Text Left, Image Right */}
        <div className="about-section image-right">
          <div className="about-text-wrap">
            <h2>{t.aboutSection2Title}</h2>
            <p>{t.aboutSection2Text}</p>
          </div>
          <div className="about-image-wrap">
            <img src={img2} alt="Our Community" />
          </div>
        </div>

        {/* Section 3 — Image Left, Text Right */}
        <div className="about-section image-left">
          <div className="about-image-wrap">
            <img src={img3} alt="Our Events" />
          </div>
          <div className="about-text-wrap">
            <h2>{t.aboutSection3Title}</h2>
            <p>{t.aboutSection3Text}</p>
          </div>
        </div>

        {/* Section 4 — Text Left, Image Right */}
        <div className="about-section image-right">
          <div className="about-text-wrap">
            <h2>{t.aboutSection4Title}</h2>
            <p>{t.aboutSection4Text}</p>
          </div>
          <div className="about-image-wrap">
            <img src={img4} alt="Our Classes" />
          </div>
        </div>

        <div className="about-video-top">
        <div className="about-video-label">{t.watchOurStory}</div>
        <div className="about-video-wrap">
          <iframe
            src="https://www.youtube.com/embed/797ahHsPWnA"
            title="Bnei Rachel About Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      </div>
    </div>
  );
}

export default About;