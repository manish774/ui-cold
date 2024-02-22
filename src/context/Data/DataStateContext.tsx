import { createContext, Dispatch, useContext, useReducer } from "react";
import { themeTypes } from "../Theme/ThemeContext";
import { AppAction, AppContextType, DataStateProps } from "./DataStateModels";
import TreeTableContent from "../../components/ContentComponents/TreeTableContent";
import Panel from "../../components/Panel/Panel";
import Files from "../../components/Files/Files";
import TableContent from "../../components/ContentComponents/TableContent";
import CircleBadge from "../../components/Badge/CircleBadge";
import Badge from "../../components/Badge/Badge";

export const Badges = (
  <Panel style={{ height: "400px" }}>
    <>
      <Badge label="Manish" type={"bordered"} theme={"danger"} />
      <Badge label="Manish" type={"bordered"} theme={"warning"} />
      <Badge label="Manish" type={"bordered"} theme={"primary"} />
      <Badge label="Manish" type={"bordered"} theme={"success"} />
    </>
  </Panel>
);

export const circleBadges = (
  <Panel style={{ height: "400px" }}>
    <>
      <h6>Circle Badges</h6>
      <CircleBadge
        labels={[
          "Manish kumar",
          "Salil Sharma",
          "Priyanka kumari",
          "Sumit kumar",
        ]}
      />
      <CircleBadge
        labels={[
          "Manish kumar",
          "Salil Sharma",
          "Priyanka kumari",
          "Sumit kumar",
        ]}
        type={"warning"}
      />
      <CircleBadge
        labels={[
          "Manish kumar",
          "Salil Sharma",
          "Priyanka kumari",
          "Sumit kumar",
        ]}
        type={"success"}
        size={"small"}
      />
    </>
  </Panel>
);

export const initialNav = [
  {
    id: 1,
    name: "Badges",
    label: "Badges",
    isVisible: true,
    content: Badges,
  },
  {
    id: 2,
    name: "Circle Badge",
    label: "Circle Badge",
    isVisible: false,
    content: circleBadges,
  },
  {
    id: 3,
    name: "Table",
    label: "Table",
    isVisible: false,
    content: <TableContent />,
  },
  {
    id: 4,
    name: "TreeTable",
    label: "Tree Table",
    isVisible: false,
    content: <TreeTableContent />,
  },
  {
    id: 5,
    name: "Home",
    label: "Test sidebar",
    isVisible: false,
    content: (
      <Panel style={{ height: "400px", background: "var(--accent-color)" }}>
        <h1>My Sidebar</h1>
      </Panel>
    ),
  },
  {
    id: 6,
    name: "Files",
    label: "File explorer",
    isVisible: false,
    content: (
      <Panel style={{ height: "400px" }}>
        <Files
          shouldPreview={true}
          maximumFiles={200}
          isMultipleUpload={true}
        />
      </Panel>
    ),
  },
];

export const defaultValue: DataStateProps = {
  navigationList: initialNav,
  theme: "light",
  isReadOnly: false,
};

export const dataReducer = (state: DataStateProps, action: AppAction) => {
  switch (action.type) {
    case "theme":
      return {
        ...state,
        theme: action.payload,
      };
    case "removeNav":
      return {
        ...state,
        navigationList: state?.navigationList?.filter(
          (nav) => nav.id !== action.payload
        ),
      };
    case "addNav":
      return {
        ...state,
        navigationList: [...state?.navigationList, action.payload],
      };

    default:
      return state;
  }
};

export const DataState = createContext<AppContextType>({
  state: defaultValue,
  dispatch: () => null,
});

export const useDataStateContext = () => {
  return useContext(DataState);
};
