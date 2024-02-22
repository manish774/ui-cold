import React from "react";
import Table from "../Table/Table";
import { tableConfig } from "../../Model/Default";
import CircleBadge from "../Badge/CircleBadge";
import Badge from "../Badge/Badge";

const TableContent = () => {
  const records = [
    { name: "John", position: "Developer" },
    { name: "Alice", position: "Engineer" },
    { name: "Bob", position: "Designer" },
    { name: "Eva", position: "Manager" },
    { name: "Charlie", position: "Analyst" },
    { name: "Grace", position: "Tester" },
    { name: "Daniel", position: "Architect" },
    { name: "Fiona", position: "Coordinator" },
    { name: "George", position: "Consultant" },
    { name: "Helen", position: "Programmer" },
    { name: "Ivan", position: "Specialist" },
    { name: "Jessica", position: "Administrator" },
    { name: "Kevin", position: "Support" },
    { name: "Laura", position: "Supervisor" },
    { name: "Michael", position: "Technician" },
    { name: "Nina", position: "Advisor" },
    { name: "Oliver", position: "Coordinator" },
    { name: "Pamela", position: "Analyst" },
    { name: "Quentin", position: "Developer" },
    { name: "Rachel", position: "Engineer" },
  ];

  const config: tableConfig = {
    columns: [
      { name: "name", id: "name", searchable: true, sortable: true },
      { name: "Position", id: "position", highLight: { color: "#8B8000" } },
      {
        name: "Position",
        id: "position",
        render: (item) => {
          return (
            <>
              <CircleBadge labels={[item?.name]} size={"small"} />
              <Badge
                label={item?.name}
                type={"bordered"}
                theme={"warning"}
                size={"small"}
              />
            </>
          );
        },
      },
    ],
    title: "Table",
    paginationRequired: true,
  };
  return (
    <div>
      <Table records={records} config={config} pageSize={5} />
    </div>
  );
};

export default TableContent;
