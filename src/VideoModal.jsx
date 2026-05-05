import "./VideoModal.css";

function VideoModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        <iframe
          className="modal-video"
          src="https://www.youtube.com/embed/53UdMJiYOGo?autoplay=1"
          title="Bnei Rachel Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default VideoModal;