import { useState } from "react";
// import PageBanner from "../PageBanner";
// import bannerImg from "../assets/farmPic.jpeg";
import { supabase } from "../supabaseClient";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import "./Donate.css";

const PRESET_AMOUNTS = [18, 36, 54, 100, 180, 360];

function Donate() {
  const { language } = useLanguage();
  const t = translations[language];

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [dedication, setDedication] = useState("");
  const [dedicationName, setDedicationName] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const finalAmount = customAmount || selectedAmount;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!finalAmount) {
      setError(language === "en" ? "Please select or enter a donation amount." : "אנא בחר או הכנס סכום לתרומה.");
      return;
    }
    if (!donorName || !donorEmail) {
      setError(language === "en" ? "Please fill in your name and email." : "אנא מלא את שמך וכתובת האימייל.");
      return;
    }

    setLoading(true);

    const { error: dbError } = await supabase.from("donations").insert([
      {
        donor_name: donorName,
        donor_email: donorEmail,
        amount: Number(finalAmount),
        frequency,
        dedication_type: dedication || null,
        dedication_name: dedicationName || null,
      },
    ]);

    setLoading(false);

    if (dbError) {
      setError(language === "en" ? "Something went wrong. Please try again." : "משהו השתבש. אנא נסה שוב.");
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div>
        <PageBanner title={t.donate} image={bannerImg} />
        <div className="donate-success">
          <h2>{t.thankYou} {donorName}! 🙏</h2>
          <p>{language === "en" ? `Your generous donation of $${finalAmount} has been recorded.` : `תרומתך הנדיבה של $${finalAmount} נרשמה.`}</p>
          <p>{language === "en" ? `We will be in touch at ${donorEmail}.` : `נצור איתך קשר בכתובת ${donorEmail}.`}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <PageBanner title={t.donate} image={bannerImg} /> */}
      <div className="donate-container">
        <h2>{t.donateTitle}</h2>
        <p className="donate-subtitle">{t.donateSubtitle}</p>

        <form onSubmit={handleSubmit} className="donate-form">

          {/* Frequency */}
          <div className="form-section">
            <h3>{t.donationFrequency}</h3>
            <div className="frequency-toggle">
              <button
                type="button"
                className={frequency === "one-time" ? "active" : ""}
                onClick={() => setFrequency("one-time")}
              >
                {t.oneTime}
              </button>
              <button
                type="button"
                className={frequency === "monthly" ? "active" : ""}
                onClick={() => setFrequency("monthly")}
              >
                {t.monthly}
              </button>
              <button
                type="button"
                className={frequency === "yearly" ? "active" : ""}
                onClick={() => setFrequency("yearly")}
              >
                {t.yearly}
              </button>
            </div>
          </div>

          {/* Preset Amounts */}
          <div className="form-section">
            <h3>{t.selectAmount}</h3>
            <div className="amount-grid">
              {PRESET_AMOUNTS.map((amount) => (
                <button
                  type="button"
                  key={amount}
                  className={selectedAmount === amount && !customAmount ? "amount-btn active" : "amount-btn"}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="custom-amount">
              <label>{t.customAmount}</label>
              <div className="custom-amount-input">
                <span>$</span>
                <input
                  type="number"
                  placeholder={t.customAmount}
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  min="1"
                />
              </div>
            </div>
          </div>

          {/* Dedication */}
          <div className="form-section">
            <h3>{t.dedication}</h3>
            <div className="dedication-toggle">
              <button
                type="button"
                className={dedication === "" ? "active" : ""}
                onClick={() => { setDedication(""); setDedicationName(""); }}
              >
                {t.noDedication}
              </button>
              <button
                type="button"
                className={dedication === "in-honor-of" ? "active" : ""}
                onClick={() => setDedication("in-honor-of")}
              >
                {t.inHonorOf}
              </button>
              <button
                type="button"
                className={dedication === "in-memory-of" ? "active" : ""}
                onClick={() => setDedication("in-memory-of")}
              >
                {t.inMemoryOf}
              </button>
            </div>
            {dedication && (
              <input
                type="text"
                className="dedication-name-input"
                placeholder={language === "en" ? "Enter the name of the person you are dedicating this to" : "הכנס את שם האדם שאתה מקדיש לו"}
                value={dedicationName}
                onChange={(e) => setDedicationName(e.target.value)}
              />
            )}
          </div>

          {/* Donor Info */}
          <div className="form-section">
            <h3>{t.yourInfo}</h3>
            <input
              type="text"
              placeholder={t.donorName}
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="donor-input"
            />
            <input
              type="email"
              placeholder={t.donorEmail}
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              className="donor-input"
            />
          </div>

          {error && <p className="donate-error">{error}</p>}

          <button type="submit" className="donate-submit-btn" disabled={loading}>
            {loading
              ? (language === "en" ? "Processing..." : "מעבד...")
              : `${t.submitDonate} ${finalAmount ? `$${finalAmount}` : ""} ${frequency !== "one-time" ? `/ ${t[frequency]}` : ""}`}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Donate;