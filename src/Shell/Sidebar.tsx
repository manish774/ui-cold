import React, { useState } from "react";
import "./Sidebar.scss";
import Panel from "../components/Panel/Panel";

interface SidebarProps<I, N, L, RC> {
  id: I;
  name: N;
  label: L;
  isVisible: boolean;
  content: RC;
}

const Sidebar = (
  props: SidebarProps<string | number, string, string, React.ReactElement>[]
) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  let [collapseIcon, setCollapseIcon] = useState("<");
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setCollapseIcon((prev) => (prev === "<" ? ">" : "<"));
  };

  const [sidebarNavOptions, setSideBarNavOptions] = useState([
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
  ]);

  const showContent = ({ id }: any) => {
    const showContentById = sidebarNavOptions?.map((s) => ({
      ...s,
      isVisible: id === s?.id,
    }));
    setSideBarNavOptions(showContentById);
  };

  const prepareNav = sidebarNavOptions?.map((nav) => (
    <div
      key={nav?.name}
      className="nav-option"
      onClick={() => {
        showContent({ id: nav?.id });
      }}
    >
      {nav?.label}
    </div>
  ));
  const viewPanel = sidebarNavOptions?.map((nav) => (
    <div key={nav?.name}>{nav?.isVisible && nav?.content}</div>
  ));
  return (
    <>
      <aside className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
        {/* Your sidebar content goes here */}
        <button onClick={handleToggleCollapse} className="toggle-sidebar">
          {collapseIcon}
        </button>
        {sidebarNavOptions?.length && prepareNav}
      </aside>
      <section className="main-container">
        <aside className="main-sidebar-right-container">
          {sidebarNavOptions?.length && viewPanel}
        </aside>
      </section>
    </>
  );
};

export default Sidebar;
