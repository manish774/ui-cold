import React from "react";
import Header from "./Shell/Header";
import { HeaderProps } from "./Shell/Shell.module";
import { createBrowserRouter } from "react-router-dom";
import { Nav } from "./components/Navigation/Navigations";
import Sidebar from "./Shell/Sidebar";
import Panel from "./components/Panel/Panel";
import { useTheme } from "./context/Theme/ThemeContext";
import Cards from "./components/Cards";
import Badge from "./components/Badge/Badge";
import CircleBadge from "./components/Badge/CircleBadge";
import TableContent from "./components/ContentComponents/TableContent";
import TreeTableContent from "./components/ContentComponents/TreeTableContent";
import Files from "./components/Files/Files";
const App = () => {
  const themCtx = useTheme();
  const Badges = (
    <Panel style={{ height: "400px", background: "cyan" }}>
      <>
        <h6>Badges</h6>
        <Badge label="Manish" type={"bordered"} theme={"danger"} />
        <Badge label="Manish" type={"bordered"} theme={"warning"} />
        <Badge label="Manish" type={"bordered"} theme={"primary"} />
        <Badge label="Manish" type={"bordered"} theme={"success"} />
      </>
    </Panel>
  );

  const circleBadges = (
    <Panel style={{ height: "400px", background: "cyan" }}>
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
  const details = [
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
        <Panel style={{ height: "400px", background: "cyan" }}>
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
  return (
    <>
      <Header
        linkRightPanel={[
          { name: "Manish", linkTo: "/", label: "Home" },
          { name: "Manish", linkTo: "/", label: "About" },
        ]}
        brandName={<>Brand</>}
      />
      <Sidebar items={details} />
    </>
  );
};

export default App;
