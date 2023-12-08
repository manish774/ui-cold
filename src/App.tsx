import { useRef, useState, Suspense, useEffect } from "react";
import trip from "./mocks/Trip.json";
import "./style.css";
import Table from "./components/Table/Table";
import Cards from "./components/Cards";
import { tableConfig } from "./Model/Default";
import "./Neu/default.scss";
import Modal from "./components/Modal/Modal";
import { Resizable } from "re-resizable";
import Tree from "./components/Tree/Tree";
import TreeData from "./mocks/Tree.json";
import Files from "./components/Files/Files";
import React from "react";
import Toast from "./components/Notify/Toast";
import CopyToClipboardButton from "./components/Copy/Copy";
import ImageZoomer from "./components/ImageZoomer/ImageZoomer";
const App = () => {
  const [selectedRow, setSelectedRow] = useState({ name: "Manish", id: 1 });
  const [data, setData] = useState(trip);
  const [dialogState, setDialogState] = useState<boolean>(false);
  const [message, setMessage] = useState<any>([]);

  const onClickName = (param: any) => {
    setSelectedRow({ ...param });
  };

  const getDeepDetails = (param: any) => {
    setSelectedRow({ ...param });
  };

  const deleteRecord = (record: any) => {
    //setData((prev) => data.filter((d) => d.id !== record.id));
  };

  // useEffect(() => {

  // }, [data, deleteRecord]);
  const tableConfig: tableConfig = {
    paginationRequired: true,
    showHeaderCount: false,
    title: <h3>Beautiful title</h3>,
    columns: [
      {
        id: "name",
        name: "User name",

        searchable: true,
        sortable: true,
        hoverAction: [
          { name: "Show details", onclick: (item) => getDeepDetails(item) },
          { name: "Show", onclick: (item) => getDeepDetails(item) },
        ],
      },
      {
        id: "age",
        name: "User age",
        render: (item: any) => {
          return item?.age;
        },
        searchable: true,
        sortable: true,
      },
      {
        id: "img",
        name: "Icon",
        render: (item: any) => {
          return <img src={item?.img} height="20px" width="20px" />;
        },
      },
      {
        id: "amount",
        name: "Value",
        searchable: true,
        hoverAction: [
          { name: "Delete record", onclick: (item) => deleteRecord(item) },
        ],
      },
    ],
  };

  const listConfig = [
    {
      id: "img",
      name: "Image",
      render: (item: any) => {
        return <img src={item?.img} height="20px" width="20px" />;
      },
    },
    {
      id: "age",
      name: "Age",
    },
    {
      id: "amount",
      name: "Percentage Covered",
      render: (item: any) => {
        return `${Math.round(item?.amount / 100)}%`;
      },
    },
  ];

  // __________________________________
  // Trip
  const tripConfig: tableConfig = {
    paginationRequired: true,
    showHeaderCount: false,
    title: <h3>Gokarna </h3>,
    minHeight: "400px",
    columns: [
      {
        id: "name",
        name: "User name",
        searchable: true,
        sortable: true,
        highLight: { color: "rebeccapurple" },
        hoverAction: [
          { name: "Show details", onclick: (item) => getDeepDetails(item) },
        ],
      },
      {
        id: "timing",
        name: "Open Time",
        searchable: true,
        hideAble: true,
        hideOnstart: true,
      },
      {
        id: "day",
        name: "Day To visit",
        sortable: true,
      },
      {
        id: "activities",
        name: "Activities to do",
        highLight: { color: "gray" },
        searchable: true,
        render: (item: any) =>
          item?.activities?.map((activity: any) => {
            return <li>{activity}</li>;
          }),
      },
    ],
  };

  const apiConfig: tableConfig = {
    paginationRequired: true,
    showHeaderCount: false,
    title: <h3>Gokarna </h3>,
    minHeight: "400px",
    columns: [
      {
        id: "id",
        name: "ID",
        searchable: true,
        sortable: true,
        highLight: { color: "rebeccapurple" },
        hoverAction: [
          { name: "Show details", onclick: (item) => getDeepDetails(item) },
        ],
      },

      {
        id: "login",
        name: "User name",
        sortable: true,
        searchable: true,
        render: (item: any) => {
          return (
            <div style={{ display: "flex" }}>
              <p>{item?.login}</p>
              <CopyToClipboardButton
                textToCopy={`Username : ${item?.login}`}
                style={{ float: "right" }}
                copyButtonStyle={{
                  beforeCopy: <button style={{ float: "right" }}>📄</button>,
                  afterCopy: <button>.</button>,
                }}
              />
            </div>
          );
        },
      },
      {
        id: "avatar_url",
        name: " Image icons",
        render: (item) => {
          return <ImageZoomer url={item?.avatar_url} initialScale={50} />;
          //return <img src={item?.avatar_url} width={"50px"} />;
        },
      },
    ],
  };
  // ____________________________________

  const selectHandler = (e: any) => {
    console.log(e);
  };

  // ____________________Tree______________--
  const treeConfig: tableConfig = {
    title: "Tree Table",
    paginationRequired: true,
    columns: [
      { id: "name", name: "Name", searchable: true },
      { id: "id", name: "Rec Name" },
      { id: "shopName", name: "Shop Name" },
    ],
  };
  //____________________________________________

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <>
      <Resizable>
        <div>
          <Toast
          // ref={toastRef}
          // message="This is a toast message."
          // type="success"
          // onClose={() => console.log("Toast closed")}
          // timeout={33000}
          />
        </div>
      </Resizable>
      <Resizable
        defaultSize={{
          width: "100%",
          height: "90%",
        }}
        style={{ border: "1px dotted gray", margin: "2px" }}
      >
        <div>
          <Suspense fallback={<>Loading...</>}>
            <Table records={data || []} pageSize={10} config={apiConfig} />
          </Suspense>
          {/* <Table records={data || []} pageSize={10} config={tableConfig} /> */}
        </div>
      </Resizable>
      <Resizable
        defaultSize={{
          width: "100%",
          height: "90%",
        }}
        style={{ border: "1px dotted gray", margin: "2px" }}
      >
        {selectedRow && (
          <Cards
            dictionary={selectedRow}
            listHeading={{ name: "User stat", value: "values" }}
            enableCloseAction={true}
            // config={listConfig}
          />
        )}
      </Resizable>
      <Resizable style={{ border: "1px dotted gray", margin: "2px" }}>
        <button onClick={() => setDialogState(true)}>Open dialog</button>
        <Modal
          isDialogOpen={dialogState}
          component={
            <Files
              shouldPreview={true}
              isMultipleUpload={true}
              maximumFiles={20}
              placeholder="Drop your files here !:)"
            />
          }
          closeLabel={"Cancel"}
          submitLabel={"Submit"}
          onCloseAction={() => setDialogState(false)}
          dialogSize={"FULL"}
          submitClick={() => {
            setDialogState(false);
          }}
          enableFooter={true}
        />
      </Resizable>
      <Resizable style={{ border: "1px dotted gray", margin: "2px" }}>
        <div style={{ width: "80%" }}>
          <Tree records={TreeData} config={treeConfig} pageSize={10} />
        </div>
      </Resizable>
      <Resizable
        defaultSize={{
          width: "70%",
          height: "90%",
        }}
        style={{ border: "1px dotted gray", padding: "2px" }}
      >
        <Files
          shouldPreview={true}
          isMultipleUpload={true}
          maximumFiles={20}
          placeholder="Drop your files here !:)"
        />
      </Resizable>
    </>
  );
};

export default App;
