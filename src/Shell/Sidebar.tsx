import React, { useState, useEffect } from "react";
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
  const [collapseIcon, setCollapseIcon] = useState("<");
  const [sidebarNavOptions, setSideBarNavOptions] = useState(
    items ||
      ([] as SidebarProps<
        string | number,
        string,
        string,
        React.ReactElement
      >[])
  );

  useEffect(() => {
    setSideBarNavOptions(items || []);
  }, [items]);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setCollapseIcon((prev) => (prev === "<" ? ">" : "<"));
  };

  const showContent = ({ id }: any) => {
    const showContentById = sidebarNavOptions?.map((s) => ({
      ...s,
      isVisible: id === s?.id,
    }));
    setSideBarNavOptions(showContentById);
  };

  const prepareNav = sidebarNavOptions.map((nav) => (
    <span className="main-option-container">
      <div
        key={nav?.name}
        className={`nav-option nav-${nav?.isVisible ? "active" : ""}`}
        onClick={() => {
          showContent({ id: nav?.id });
        }}
        title={nav?.name}
      >
        <>{nav?.label}</>
      </div>
      <button
        style={{ float: "right", marginTop: "-22px" }}
        onClick={() => removeNav(nav?.id)}
        className={"nav-close"}
      >
        x
      </button>
    </span>
  ));

  const viewPanel = sidebarNavOptions?.map((nav) => (
    <div key={nav?.name}>{nav?.isVisible && nav?.content}</div>
  ));

  const removeNav = (id: any) => {
    if (sidebarNavOptions?.length > 1) {
      const navs = sidebarNavOptions?.filter((n) => n?.id !== id);
      const isHavingVisibleNav = navs?.some((n) => n?.isVisible);
      if (!isHavingVisibleNav) navs[0].isVisible = true;
      setSideBarNavOptions(navs);
    }
  };

  return (
    <>
      <aside className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
        {prepareNav}
        <button onClick={handleToggleCollapse} className="toggle-sidebar">
          {collapseIcon}
        </button>
      </aside>
      <section className="main-container">
        <aside className="main-sidebar-right-container">{viewPanel}</aside>
      </section>
    </>
  );
};

export default Sidebar;
