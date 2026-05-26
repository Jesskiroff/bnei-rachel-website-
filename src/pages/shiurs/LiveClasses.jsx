import { useState } from "react";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";
import { supabase } from "../../supabaseClient";
import "./LiveClasses.css";

function LiveClasses() {
  const { language } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    setError("");

    if (!email) {
      setError(language === "en" ? "Please enter your email." : "אנא הכנס את כתובת האימייל שלך.");
      return;
    }

    setLoading(true);

    const { error: dbError } = await supabase
      .from("live_class_signups")
      .insert([{ email }]);

    setLoading(false);

    if (dbError) {
      setError(language === "en" ? "Something went wrong. Please try again." : "משהו השתבש. אנא נסה שוב.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="live-classes-page">
      <div className="live-classes-card">
        <div className="live-classes-icon"></div>
        <h1>{t.comingSoon}</h1>
        <h2>{t.liveClasses}</h2>
        <p>{t.liveClassesDescription}</p>

        {submitted ? (
          <div className="signup-success">
            <p>✅ {t.liveClassesSignupSuccess}</p>
          </div>
        ) : (
          <form onSubmit={handleSignup} className="signup-form">
            <input
              type="email"
              placeholder={t.donorEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-input"
            />
            <button
              type="submit"
              className="signup-btn"
              disabled={loading}
            >
              {loading
                ? (language === "en" ? "Submitting..." : "שולח...")
                : t.notifyMe}
            </button>
            {error && <p className="signup-error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default LiveClasses;