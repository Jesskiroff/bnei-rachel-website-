import { useState } from "react";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";
import "./RecordedClasses.css";

const categories = ["All", "Parasha", "Machshava", "Mussar"];

const videos = [
  {
    id: "epmeu24gLo4",
    title: "Parashat Naso",
    teacher: "Rabbi Elkaslasi",
    category: "Parasha",
  },
  {
    id: "2FRYqEy0dVc",
    title: "Parashat Bamidbar",
    teacher: "Rabbi Elkaslasi",
    category: "Parasha",
  },
  {
    id: "JRcEg61s-RY",
    title: "Parashat Tazria & Metzora",
    teacher: "Rabbi Elkaslasi",
    category: "Parasha",
  },
  {
    id: "yQI63RGpRbY",
    title: "Parashat Emor",
    teacher: "Rabbi Elkaslasi",
    category: "Parasha",
  },
  {
    id: "rS5N5cHx2wk",
    title: "Shabbat Chol Hamoed Pesach",
    teacher: "Rabbi Elkaslasi",
    category: "Machshava",
  },
  {
    id: "WWMuuxWOz5w",
    title: "Zerizut",
    teacher: "Rav Boaz",
    category: "Mussar",
  },
  {
    id: "VFqQKlieifE",
    title: "Mesilat Yesharim",
    teacher: "Rav Boaz",
    category: "Mussar",
  },
];

function RecordedClasses() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = activeCategory === "All"
    ? videos
    : videos.filter(v => v.category === activeCategory);

  return (
    <div className="recorded-classes-page">
      <div className="recorded-classes-container">

        <div className="recorded-classes-intro">
          <h1>{t.recordedClasses}</h1>
          <p>{t.recordedClassesSubtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={activeCategory === cat ? "category-btn active" : "category-btn"}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="video-grid">
          {filteredVideos.map(video => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="video-thumbnail">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                />
                <div className="play-overlay">▶</div>
              </div>
              <div className="video-info">
                <span className="video-category">{video.category}</span>
                <h3>{video.title}</h3>
                <p>{video.teacher}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setSelectedVideo(null)}>✕</button>
            <h3>{selectedVideo.title}</h3>
            <p>{selectedVideo.teacher}</p>
            <div className="video-modal-player">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecordedClasses;