import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props?.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
