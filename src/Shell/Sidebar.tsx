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
interface SideProps {
  items: SidebarProps<string | number, string, string, React.ReactElement>[];
}
const Sidebar = ({ items }: SideProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  let [collapseIcon, setCollapseIcon] = useState("<");
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setCollapseIcon((prev) => (prev === "<" ? ">" : "<"));
  };

  const initialSidebarNavOptions =
    items ||
    ([] as SidebarProps<string | number, string, string, React.ReactElement>[]);

  const [sidebarNavOptions, setSideBarNavOptions] = useState(
    initialSidebarNavOptions
  );

  console.log(sidebarNavOptions);
  const showContent = ({ id }: any) => {
    const showContentById = sidebarNavOptions?.map((s) => ({
      ...s,
      isVisible: id === s?.id,
    }));
    setSideBarNavOptions(showContentById);
  };

  const prepareNav = sidebarNavOptions.map((nav) => (
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
        {prepareNav}
      </aside>
      <section className="main-container">
        <aside className="main-sidebar-right-container">{viewPanel}</aside>
      </section>
    </>
  );
};

export default Sidebar;
