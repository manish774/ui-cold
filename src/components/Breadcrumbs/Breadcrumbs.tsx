import React from "react";

const Breadcrumbs = () => {
  const configs = [
    { label: "Home", navigate: "/l" },
    { label: "Test", navigate: "/test" },
    { label: "Best", navigate: "/test" },
  ];
  const prepareBreadCrumbs = (configs || []).map((config, i) => (
    <span>
      <a href={config?.navigate}>{config?.label}</a>
      {configs?.length !== i + 1 && " >> "}
    </span>
  ));

  return <div>{prepareBreadCrumbs}</div>;
};

export default Breadcrumbs;
