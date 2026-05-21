import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";


import "./Schedule.css";

const englishSchedule = {
  faculty: [
    { role: "Year 1", name: "Rav Yossi Mashriki" },
    { role: "Years 2–3", name: "Rav Eilon Tzarfati" },
    { role: "Year 4+", name: "Rav Davidi Alfasi" },
    { role: "Kollel & Rabbinate Exams*", name: "Rav Yaakov Kleinshpiz" },
  ],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  rows: [
    { time: "7:00–8:00", type: "full", label: "Shacharit (Morning Prayers)", color: "meal" },
    { time: "8:00–8:30", type: "full", label: "Breakfast", color: "meal" },
    { time: "8:30", type: "full", label: "Morning Session Begins", color: "session" },
    {
      time: "8:50–9:30", type: "daily", color: "class",
      cells: [
        "Weekly Parasha — Rav Yossi Cohen",
        "Ein Ayah Brachot Ch.1 — Rav Davidi Alfasi",
        "Ein Ayah Brachot Ch.2 — Rav David Jiami",
        "Shaarei Teshuva — Rav Yaakov Kleinshpiz",
        "Orot HaTeshuva — Rav Eilon Tzarfati",
        "Maharal Tiferet Yisrael — Rav Yossi Mashriki",
      ]
    },
    {
      time: "9:30–13:15", type: "mixed", color: "session",
      cells: [
        { span: 4, label: "Morning Session (Beit Midrash Study)" },
        { span: 1, label: "12:30–13:15: Orot HaTorah (Yr 1–3) — Rosh Yeshiva" },
        { span: 1, label: "12:30–13:15: Weekly Parasha — Rosh Yeshiva" },
      ]
    },
    { time: "13:15–13:40", type: "full", label: "Lunch", color: "meal" },
    {
      time: "13:40–14:15", type: "daily", color: "class",
      cells: [
        "Chofetz Chaim — Rav Yaakov Kleinshpiz",
        "Halacha & Current Events — Rosh Yeshiva",
        "Halachic Topics — Rav Eilon Tzarfati",
        "Halacha & Current Events — Rosh Yeshiva",
        "Halacha & Current Events — Rosh Yeshiva",
        "General Halacha Shiur — Rosh Yeshiva",
      ]
    },
    {
      time: "14:15–15:00", type: "daily", color: "class",
      cells: [
        "Orot (Yr 4+) — Rav Boaz Kahana",
        "Afternoon Break",
        "Building the Home — Rosh Yeshiva",
        "Lashon HaKodesh — Rosh Yeshiva",
        "",
        "",
      ]
    },
    { time: "15:00–15:20", type: "full", label: "Mincha (Afternoon Prayers)", color: "meal" },
    {
      time: "15:20–16:10", type: "daily", color: "class",
      cells: [
        "Mesilat Yesharim — Rav Boaz Kahana",
        "Nefesh HaChaim (Yr 4+) — Rosh Yeshiva",
        "L'Emunat Iteinu Pt.3 (Yr 1–3) — Rav Davidi Alfasi",
        "Kuzari — Rav Davidi Alfasi",
        "Moreh Nevuchim — Rav Yossi Mashriki",
        "Igrot HaRaaya (Yr 1–3) — Rosh Yeshiva | Orot (Yr 4+) — Rav Davidi Alfasi",
      ]
    },
    { time: "16:10–18:30", type: "full", label: "Afternoon Session (Beit Midrash Study)", color: "session" },
    {
      time: "18:30–19:30", type: "daily", color: "class",
      cells: [
        "Sichot HaRatzya — Talmud Torah (Yr 1–3) — Rav David Landau",
        "Shmoneh Perakim (Yr 1–3) — Rav Eilon Tzarfati",
        "Hakdamot HaRambam — Rav Yaakov Kleinshpiz",
        "Maharal — Netzach Yisrael — Rav Avi Tilman",
        "",
        "",
      ]
    },
    { time: "19:30–20:15", type: "full", label: "Dinner", color: "meal" },
    { time: "20:15–20:30", type: "full", label: "Maariv (Evening Prayers)", color: "meal" },
    { time: "20:15–23:00", type: "full", label: "Evening Session (Beit Midrash Study)", color: "session" },
    { time: "Motzash — Shabbat Yeshiva", type: "full", label: "22:00–23:30 | Beit Ramim — At the Rosh Yeshiva's Home", color: "shabbat" },
  ]
};

const hebrewSchedule = {
  faculty: [
    { role: "שיעור א'", name: "הרב יוסי משריקי" },
    { role: "שיעור ב'-ג'", name: "הרב אילון צרפתי" },
    { role: "שיעור ד' ומעלה", name: "הרב דוידי אלפסי" },
    { role: "ר\"מ כולל ומבחני רבנות*", name: "הרב יעקב קליינשפיז" },
  ],
  days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי"],
  rows: [
    { time: "7:00–8:00", type: "full", label: "שחרית", color: "meal" },
    { time: "8:00–8:30", type: "full", label: "ארוחת בוקר", color: "meal" },
    { time: "8:30", type: "full", label: "סדר בוקר", color: "session" },
    {
      time: "8:50–9:30", type: "daily", color: "class",
      cells: [
        "פרשת שבוע — הרב יוסי כהן",
        "עין אי\"ה ברכות א' — הרב דוידי אלפסי",
        "עין אי\"ה ברכות ב' — הרב דוד ג'יאמי",
        "שערי תשובה — הרב יעקב קליינשפיז",
        "אורות התשובה — הרב אילון צרפתי",
        "מהר\"ל תפארת ישראל — הרב יוסי משריקי",
      ]
    },
    {
      time: "9:30–13:15", type: "mixed", color: "session",
      cells: [
        { span: 4, label: "סדר בוקר" },
        { span: 1, label: "12:30–13:15: אורות התורה לשיעור א'-ג' — ראש הישיבה" },
        { span: 1, label: "12:30–13:15: פרשת שבוע — ראש הישיבה" },
      ]
    },
    { time: "13:15–13:40", type: "full", label: "ארוחת צהרים", color: "meal" },
    {
      time: "13:40–14:15", type: "daily", color: "class",
      cells: [
        "חפץ חיים — הרב יעקב קליינשפיז",
        "הלכה וענייני דיומא — ראש הישיבה",
        "סוגיות בהלכה מפ\"ש — הרב אילון צרפתי",
        "הלכה וענייני דיומא — ראש הישיבה",
        "הלכה וענייני דיומא — ראש הישיבה",
        "שיעור כללי בהלכה — ראש הישיבה",
      ]
    },
    {
      time: "14:15–15:00", type: "daily", color: "class",
      cells: [
        "אורות שיעור ד' ומעלה — הרב בעז כהנא",
        "הפסקת צהריים",
        "בניין הבית — ראש הישיבה",
        "לשון הקודש — ראש הישיבה",
        "",
        "",
      ]
    },
    { time: "15:00–15:20", type: "full", label: "מנחה", color: "meal" },
    {
      time: "15:20–16:10", type: "daily", color: "class",
      cells: [
        "מסילת ישרים — הרב בעז כהנא",
        "נפש החיים שיעור ד' ומעלה — ראש הישיבה",
        "לאמונת עיתנו חלק ג' שיעור א'-ג' — הרב דוידי אלפסי",
        "כוזרי — הרב דוידי אלפסי",
        "מורה נבוכים — הרב יוסי משריקי",
        "אגרות הראי\"ה שיעור א'-ג' — ראש הישיבה | אורות שיעור ד' ומעלה — הרב דוידי אלפסי",
      ]
    },
    { time: "16:10–18:30", type: "full", label: "סדר צהריים", color: "session" },
    {
      time: "18:30–19:30", type: "daily", color: "class",
      cells: [
        "שיחות הרצי\"ה תלמוד תורה שיעור א'-ג' — הרב דוד לנדאו",
        "שמונה פרקים שיעור א'-ג' — הרב אילון צרפתי",
        "הקדמות הרמב\"ם — הרב יעקב קליינשפיז",
        "מהר\"ל נצח ישראל — הרב אבי טילמן",
        "",
        "",
      ]
    },
    { time: "19:30–20:15", type: "full", label: "ארוחת ערב", color: "meal" },
    { time: "20:15–20:30", type: "full", label: "ערבית", color: "meal" },
    { time: "20:15–23:00", type: "full", label: "סדר ערב", color: "session" },
    { time: "מוצש\"ק — שבת ישיבה", type: "full", label: "22:00–23:30 | בית רמי\"ם אצל ראש הישיבה", color: "shabbat" },
  ]
};

function ScheduleTable({ data, isHebrew }) {
  return (
    <div className={`schedule-wrap ${isHebrew ? "rtl" : ""}`}>
      <div className="faculty-grid">
        {data.faculty.map((f, i) => (
          <div key={i} className="faculty-card">
            <div className="faculty-role">{f.role}</div>
            <div className="faculty-name">{f.name}</div>
          </div>
        ))}
      </div>

      <div className="table-scroll">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>{isHebrew ? "שעה" : "Time"}</th>
              {data.days.map((d, i) => <th key={i}>{d}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i} className={`row-${row.color}`}>
                <td className="time-cell">{row.time}</td>
                {row.type === "full" && (
                  <td colSpan={6} className="full-cell">{row.label}</td>
                )}
                {row.type === "daily" && row.cells.map((c, j) => (
                  <td key={j}>{c}</td>
                ))}
                {row.type === "mixed" && row.cells.map((c, j) => (
                  <td key={j} colSpan={c.span}>{c.label}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Schedule() {
  const { language } = useLanguage();
  const t = translations[language];
  const isHebrew = language === "he";
  const data = isHebrew ? hebrewSchedule : englishSchedule;

  return (
    <div>
     
      <div className="schedule-container">
        <div className="schedule-intro">
          <h2>{t.scheduleTitle}</h2>
          <p>{t.scheduleSubtitle}</p>
          
          
        </div>
        <ScheduleTable data={data} isHebrew={isHebrew} />
      </div>
    </div>
  );
}

export default Schedule;