import { useState } from "react";
import PageBanner from "../PageBanner";
import bannerImg from "../assets/farmPic.jpeg";
import { supabase } from "../supabaseClient";
import "./Donate.css";

const PRESET_AMOUNTS = [18, 36, 54, 100, 180, 360];

function Donate() {
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
      setError("Please select or enter a donation amount.");
      return;
    }
    if (!donorName || !donorEmail) {
      setError("Please fill in your name and email.");
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
      setError("Something went wrong. Please try again.");
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div>
        <PageBanner title="Donate" image={bannerImg} />
        <div className="donate-success">
          <h2>Thank You, {donorName}! 🙏</h2>
          <p>Your generous donation of ${finalAmount} has been recorded.</p>
          <p>We will be in touch at {donorEmail}.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageBanner title="Donate" image={bannerImg} />
      <div className="donate-container">
        <h2>Support Bnei Rachel</h2>
        <p className="donate-subtitle">
          Your donation helps us continue our mission. Every contribution makes a difference.
        </p>

        <form onSubmit={handleSubmit} className="donate-form">

          {/* Frequency */}
          <div className="form-section">
            <h3>Donation Frequency</h3>
            <div className="frequency-toggle">
              <button
                type="button"
                className={frequency === "one-time" ? "active" : ""}
                onClick={() => setFrequency("one-time")}
              >
                One-Time
              </button>
              <button
                type="button"
                className={frequency === "monthly" ? "active" : ""}
                onClick={() => setFrequency("monthly")}
              >
                Monthly
              </button>
              <button
                type="button"
                className={frequency === "yearly" ? "active" : ""}
                onClick={() => setFrequency("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Preset Amounts */}
          <div className="form-section">
            <h3>Select Amount</h3>
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
              <label>Or enter a custom amount:</label>
              <div className="custom-amount-input">
                <span>$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
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
            <h3>Dedication (Optional)</h3>
            <div className="dedication-toggle">
              <button
                type="button"
                className={dedication === "" ? "active" : ""}
                onClick={() => { setDedication(""); setDedicationName(""); }}
              >
                No Dedication
              </button>
              <button
                type="button"
                className={dedication === "in-honor-of" ? "active" : ""}
                onClick={() => setDedication("in-honor-of")}
              >
                In Honor Of
              </button>
              <button
                type="button"
                className={dedication === "in-memory-of" ? "active" : ""}
                onClick={() => setDedication("in-memory-of")}
              >
                In Memory Of
              </button>
            </div>
            {dedication && (
              <input
                type="text"
                className="dedication-name-input"
                placeholder={`Enter the name of the person you are dedicating this to`}
                value={dedicationName}
                onChange={(e) => setDedicationName(e.target.value)}
              />
            )}
          </div>

          {/* Donor Info */}
          <div className="form-section">
            <h3>Your Information</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="donor-input"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              className="donor-input"
            />
          </div>

          {error && <p className="donate-error">{error}</p>}

          <button type="submit" className="donate-submit-btn" disabled={loading}>
            {loading ? "Processing..." : `Donate ${finalAmount ? `$${finalAmount}` : ""} ${frequency !== "one-time" ? `/ ${frequency}` : ""}`}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Donate;