import { Dispatch } from "react";
import { themeTypes } from "../Theme/ThemeContext";

export type navigationProps<ID, NAME, L, C> = {
  id: ID;
  name: NAME;
  label: L;
  isVisible: boolean;
  content: C;
};

export interface DataStateProps {
  navigationList: navigationProps<number, string, string, React.ReactElement>[];
  theme: themeTypes;
  isReadOnly: boolean;
}

export type AppAction =
  | { type: "readOnly"; payload: boolean }
  | {
      type: "addNav";
      payload: navigationProps<number, string, string, React.ReactElement>;
    }
  | { type: "removeNav"; payload: number }
  | { type: "theme"; payload: string };

export interface AppContextType {
  state: DataStateProps;
  dispatch: Dispatch<AppAction>;
}
