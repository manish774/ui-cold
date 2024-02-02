import { ReactElement } from "react";
import Dummy from "../Dummy/Dummy";
import Dummy1 from "../Dummy/Dummy1";

type props = { path: string; element: ReactElement };

export const Nav: props[] = [
  { path: "/", element: <Dummy /> },
  { path: "/dummy", element: <Dummy1 /> },
];
