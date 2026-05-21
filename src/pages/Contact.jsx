import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import PageBanner from "../PageBanner";
import bannerImg from "../assets/bryWallLogo.jpeg";
import { supabase } from "../supabaseClient";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setError(language === "en" ? "Please fill in all required fields." : "אנא מלא את כל השדות הנדרשים.");
      return;
    }

    setLoading(true);

    // Save to Supabase
    const { error: dbError } = await supabase.from("contact_submissions").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
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
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
    } catch (emailError) {
      console.error("Email failed to send:", emailError);
    }

    setLoading(false);
    navigate("/contact-success");
  }

  return (
    <div>
      <PageBanner title={t.contact} image={bannerImg} />
      <div className="contact-container">

        <div className="contact-intro">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactSubtitle}</p>
        </div>

        {success ? (
          <div className="contact-success">
            <div className="contact-success-icon">✉️</div>
            <h3>{t.contactSuccessTitle}</h3>
            <p>{t.contactSuccessMessage}</p>
            <button
              className="contact-send-again-btn"
              onClick={() => setSuccess(false)}
            >
              {t.sendAnotherMessage}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">

            {/* Name and Email */}
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder={t.donorName}
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
              />
              <input
                type="email"
                name="email"
                placeholder={t.donorEmail}
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
              />
            </div>

            {/* Phone and Subject */}
            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder={t.phoneNumber}
                value={formData.phone}
                onChange={handleChange}
                className="contact-input"
              />
              <input
                type="text"
                name="subject"
                placeholder={t.subject}
                value={formData.subject}
                onChange={handleChange}
                className="contact-input"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder={t.message}
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
              rows={6}
            />

            {error && <p className="contact-error">{error}</p>}

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={loading}
            >
              {loading
                ? (language === "en" ? "Sending..." : "שולח...")
                : t.sendMessage}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}

export default Contact;