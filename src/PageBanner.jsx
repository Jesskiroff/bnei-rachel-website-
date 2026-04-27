import './PageBanner.css';

function PageBanner({ title, image }) {
  return (
    <div className="page-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-banner-overlay">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default PageBanner;