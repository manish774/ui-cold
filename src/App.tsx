import React from "react";
import Header from "./Shell/Header";
import { HeaderProps } from "./Shell/Shell.module";
import { createBrowserRouter } from "react-router-dom";
import { Nav } from "./components/Navigation/Navigations";
import Sidebar from "./Shell/Sidebar";
import Panel from "./components/Panel/Panel";

const App = () => {
  const details = [
    {
      id: 1,
      name: "Home",
      label: "Home",
      isVisible: true,
      content: (
        <Panel style={{ height: "400px" }}>
          <h1>Home test</h1>
        </Panel>
      ),
    },
    {
      id: 2,
      name: "Contact",
      label: "Contact",
      isVisible: false,
      content: (
        <Panel>
          <h1>Contact me</h1>
        </Panel>
      ),
    },
    {
      id: 3,
      name: "Content",
      label: "Content",
      isVisible: false,
      content: (
        <Panel>
          <h1>test me once</h1>
        </Panel>
      ),
    },
    {
      id: 4,
      name: "Home",
      label: "Test sidebar",
      isVisible: false,
      content: (
        <Panel>
          <h1>My Sidebar</h1>
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
