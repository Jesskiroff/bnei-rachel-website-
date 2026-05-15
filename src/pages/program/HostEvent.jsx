import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";
import PageBanner from "../../PageBanner";
import bannerImg from "../../assets/hachnasatSeferTorah.jpeg";
import { supabase } from "../../supabaseClient";
import "./HostEvent.css";
import emailjs from "@emailjs/browser";

const EVENT_TYPES = [
  { value: "bar-mitzvah", label: "Bar Mitzvah" },
  { value: "bat-mitzvah", label: "Bat Mitzvah" },
  { value: "wedding", label: "Wedding" },
  { value: "shabbat-dinner", label: "Shabbat Dinner" },
  { value: "brit-milah", label: "Brit Milah" },
  { value: "other", label: "Other" },
];

function HostEvent() {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    otherEventType: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
      setError(language === "en" ? "Please fill in all required fields." : "אנא מלא את כל השדות הנדרשים.");
      return;
    }

    setLoading(true);

    // Save to Supabase
    const { error: dbError } = await supabase.from("event_requests").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        event_type: formData.eventType === "other" ? formData.otherEventType : formData.eventType,
        notes: formData.notes || null,
      },
    ]);

    if (dbError) {
      console.log("Supabase error:", dbError);
      setLoading(false);
      setError(language === "en" ? "Something went wrong. Please try again." : "משהו השתבש. אנא נסה שוב.");
      return;
    }

    // Send email via EmailJS
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          event_type: formData.eventType === "other" ? formData.otherEventType : formData.eventType,
          notes: formData.notes || "No additional notes",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
    } catch (emailError) {
      console.error("Email failed to send:", emailError);
    }

    setLoading(false);
    navigate("/thank-you");
  }
    

  return (
    <div>
      <PageBanner title={t.hostEvent} image={bannerImg} />
      <div className="host-event-container">

        <div className="host-event-intro">
          <h2>{t.hostEventTitle}</h2>
          <p>{t.hostEventSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="host-event-form">

          {/* Personal Info */}
          <div className="form-section">
            <h3>{t.yourInfo}</h3>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder={t.donorName}
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder={t.donorEmail}
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder={t.phoneNumber}
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {/* Event Type */}
          <div className="form-section">
            <h3>{t.eventType}</h3>
            <div className="event-type-grid">
              {EVENT_TYPES.map((type) => (
                <button
                  type="button"
                  key={type.value}
                  className={formData.eventType === type.value ? "event-type-btn active" : "event-type-btn"}
                  onClick={() => setFormData({ ...formData, eventType: type.value })}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* Other event type input */}
            {formData.eventType === "other" && (
              <input
                type="text"
                name="otherEventType"
                placeholder={t.otherEventType}
                value={formData.otherEventType}
                onChange={handleChange}
                className="form-input"
                style={{ marginTop: "12px" }}
              />
            )}
          </div>

          {/* Additional Notes */}
          <div className="form-section">
            <h3>{t.additionalNotes}</h3>
            <textarea
              name="notes"
              placeholder={t.notesPlaceholder}
              value={formData.notes}
              onChange={handleChange}
              className="form-textarea"
              rows={5}
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="host-event-submit-btn" disabled={loading}>
            {loading
              ? (language === "en" ? "Submitting..." : "שולח...")
              : t.submitRequest}
          </button>

        </form>
      </div>
    </div>
  );
}

export default HostEvent;