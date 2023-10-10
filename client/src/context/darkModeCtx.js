import { createContext, useEffect, useState } from "react";

export const DarkModeCtx = createContext();

export const DarkModeCtxProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeCtx.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeCtx.Provider>
  );
};
