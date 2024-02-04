import { ReactElement } from "react";
import Dummy from "../Dummy/Dummy";
import Dummy1 from "../Dummy/Dummy1";

export type NavProps = { path: string; element: ReactElement };

export const Nav: NavProps[] = [
  { path: "/", element: <Dummy /> },
  { path: "/dummy", element: <Dummy1 /> },
];
