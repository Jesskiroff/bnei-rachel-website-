import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "he" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div dir={language === "he" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}