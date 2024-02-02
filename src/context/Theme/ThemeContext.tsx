import React, { useContext } from "react";

type ContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};
