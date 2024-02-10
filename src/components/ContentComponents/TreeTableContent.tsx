import React from "react";
import Tree from "../Tree/Tree";
import TreeData from "../../mocks/Tree.json";
const TreeTableContent = () => {
  const config = {};
  return (
    <div>
      <Tree
        records={TreeData}
        config={{
          title: "Tree Table",
          columns: [
            { name: "name", id: "name" },
            { name: "shopName", id: "shopName" },
          ],
        }}
        pageSize={5}
      />
    </div>
  );
};

export default TreeTableContent;
