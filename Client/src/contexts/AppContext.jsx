import { createContext, useContext, useMemo, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState (() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : false;
  })

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    })
  }

  const value = {
    isDarkMode,
    setIsDarkMode,
    toggleDarkMode,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
