import React, { ReactElement } from "react";
import "./Header.scss";
import { HeaderProps } from "./Shell.module";
import { createBrowserRouter } from "react-router-dom";
import { Nav, NavProps } from "../components/Navigation/Navigations";

const Header = ({ links }: HeaderProps<React.ReactElement | string>) => {
  const NavLinks = links?.map((l) => ({ path: l.linkTo, element: l?.label }));
  const router = createBrowserRouter(Nav);
  return (
    <header>
      <div>
        {links?.map((l) => (
          <span>{l?.label}</span>
        ))}
      </div>
    </header>
  );
};

export default Header;
