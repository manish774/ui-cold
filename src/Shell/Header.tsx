import React, { ReactElement } from "react";
import "./Header.scss";
import { HeaderProps } from "./Shell.module";
import { createBrowserRouter } from "react-router-dom";
import { Nav, NavProps } from "../components/Navigation/Navigations";

const Header = ({
  linkRightPanel,
  brandName,
}: HeaderProps<React.ReactElement | string>) => {
  const NavLinks = linkRightPanel?.map((l) => ({
    path: l.linkTo,
    element: l?.label,
  }));
  const router = createBrowserRouter(Nav);

  const handleActiveness = (e: any) => {};

  return (
    <header>
      <span className="logo">{brandName}</span>
      <div className="header-right">
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
