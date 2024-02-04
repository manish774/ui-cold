import React from "react";
import Header from "./Shell/Header";
import { HeaderProps } from "./Shell/Shell.module";
import { createBrowserRouter } from "react-router-dom";
import { Nav } from "./components/Navigation/Navigations";

const App = () => {
  return (
    <>
      <Header
        links={[
          { name: "Manish", linkTo: "/", label: "test" },
          { name: "Manish", linkTo: "/", label: "test" },
        ]}
      />
    </>
  );
};

export default App;
