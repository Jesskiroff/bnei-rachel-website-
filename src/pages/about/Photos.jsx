import { useState } from "react";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";
// import PageBanner from "../../PageBanner";
// import bannerImg from "../../assets/farmPic.jpeg";
import "./Photos.css";

// Import your photos here
import photo1 from "../../assets/farmPic.jpeg";
import photo2 from "../../assets/rabbiClass.jpeg";
import photo3 from "../../assets/rabbiMatzahBaking.jpeg";
import photo4 from "../../assets/hachnasatSeferTorah.jpeg";
import photo5 from "../../assets/kidsMatzahBaking.jpeg";

const albums = [
  {
    category: "events",
    photos: [photo1, photo2, photo3],
  },
  {
    category: "classes",
    photos: [photo4, photo5],
  },
];

function Photos() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const allPhotos = albums.flatMap((album) => album.photos);
  const filteredPhotos =
    activeCategory === "all"
      ? allPhotos
      : albums.find((a) => a.category === activeCategory)?.photos || [];

  return (
    <div>
      {/* <PageBanner title={t.photos} image={bannerImg} /> */}
      <div className="photos-container">

        {/* Category Filter Buttons */}
        <div className="photos-filter">
          <button
            className={activeCategory === "all" ? "filter-btn active" : "filter-btn"}
            onClick={() => setActiveCategory("all")}
          >
            {t.allPhotos}
          </button>
          <button
            className={activeCategory === "events" ? "filter-btn active" : "filter-btn"}
            onClick={() => setActiveCategory("events")}
          >
            {t.events}
          </button>
          <button
            className={activeCategory === "classes" ? "filter-btn active" : "filter-btn"}
            onClick={() => setActiveCategory("classes")}
          >
            {t.classes}
          </button>
        </div>

        {/* Photo Grid */}
        <div className="photos-grid">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="photo-item"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo} alt={`photo-${index}`} />
              <div className="photo-overlay">
                <span>+</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <div className="lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setSelectedPhoto(null)}>✕</button>
              <button
                className="lightbox-arrow left"
                onClick={() => {
                  const currentIndex = filteredPhotos.indexOf(selectedPhoto);
                  const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
                  setSelectedPhoto(filteredPhotos[prevIndex]);
                }}
              >
                ‹
              </button>
              <img src={selectedPhoto} alt="expanded" className="lightbox-image" />
              <button
                className="lightbox-arrow right"
                onClick={() => {
                  const currentIndex = filteredPhotos.indexOf(selectedPhoto);
                  const nextIndex = (currentIndex + 1) % filteredPhotos.length;
                  setSelectedPhoto(filteredPhotos[nextIndex]);
                }}
              >
                ›
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Photos;