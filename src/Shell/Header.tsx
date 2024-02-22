import React, { ReactElement } from "react";
import "./Header.scss";
import { HeaderProps } from "./Shell.module";
import { createBrowserRouter } from "react-router-dom";
import { Nav, NavProps } from "../components/Navigation/Navigations";
import Toggle from "../components/Toggle";
import { useTheme } from "../context/Theme/ThemeContext";

const Header = ({
  linkRightPanel,
  brandName,
}: HeaderProps<React.ReactElement | string>) => {
  const NavLinks = linkRightPanel?.map((l) => ({
    path: l.linkTo,
    element: l?.label,
  }));
  const router = createBrowserRouter(Nav);
  const themCtx = useTheme();
  const handleActiveness = (e: any) => {};
  const themePatterns = {
    dark: "light",
    light: "dark-pink",
    "dark-pink": "dark",
  };
  return (
    <header>
      <span className="logo">{brandName}</span>
      <div className="header-right">
        <a>
          <Toggle
            onToggle={() => {
              const theme = themCtx?.theme;
              //@ts-ignore
              themCtx?.toggleTheme(themePatterns[theme]);
            }}
          />
        </a>
        {NavLinks?.map((n) => (
          <a href={n.path} onClick={handleActiveness}>
            {n?.element}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
