import React, { useEffect, useState } from "react";
import "./generic/Table/Table.scss";
import Input from "./generic/Input";
import { searchFromDictionary } from "../utils/Index";
interface CardProps {
  listHeading: { name: string; value: string };
  dictionary: any;
  enableCloseAction?: boolean;
  config?: any; //if config not passed , it will print all object properties
  title?: string | JSX.Element;
}
const Cards = ({
  listHeading,
  dictionary,
  config,
  enableCloseAction = false,
  title,
}: CardProps) => {
  const dictionaryProperties = Object.keys(dictionary);
  const [dataObject, setDataObject] = useState<any>();

  useEffect(() => {
    setDataObject(dictionary);
  }, [dictionary]);

  const prepareHeading = (
    <tr>
      <th>{listHeading?.name}</th>
      <th>{listHeading?.value}</th>
    </tr>
  );

  const prepareBody = () => {
    return config
      ? config.map(
          (prop: any) =>
            dataObject && (
              <tr>
                <td>{prop?.name}</td>
                <td>
                  {prop?.render
                    ? prop?.render(dataObject)
                    : dataObject[prop?.id]}
                </td>
              </tr>
            )
        )
      : dictionaryProperties.map(
          (prop: any) =>
            dataObject && (
              <tr key={dataObject[prop]}>
                <td>{prop}</td>
                <td>{dataObject[prop]}</td>
              </tr>
            )
        );
  };

  const closeList = () => {
    setDataObject("");
  };

  return (
    dataObject && (
      <div className="table-container">
        <div>
          <h3>{title}</h3>
        </div>

        <div style={{ padding: "5px", margin: "10px" }}>
          {enableCloseAction && (
            <div style={{ textAlign: "right" }}>
              <button onClick={closeList}>x</button>
            </div>
          )}
          <div>
            <table>
              <thead>{prepareHeading}</thead>
              <tbody>{prepareBody()}</tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
};

export default Cards;
