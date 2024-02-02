import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/hooks";
import "./generic.scss";
interface InputProps {
  onchangeHandler: (value: string) => any;
  type?: "number" | "text" | "email" | "file" | "checkbox";
  max?: number;
  min?: number;
  value: any;
  label?: JSX.Element | string | number;
  labelPosition?: "left" | "right" | "above" | "below";
  placeholder?: string;
  multiple?: boolean;
  otherProps?: Record<string, number>;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { onchangeHandler } = props;
  const [inputValue, setInputValue] = useState<any>(props?.min || undefined);
  const [eventObject, setEventObject] = useState<any>();
  const debounceInput = useDebounce(eventObject, 500);
  const labelPositionClasses = {
    left: "left",
    right: "right",
    above: "above",
    below: "below",
  };

  useEffect(() => {
    onchangeHandler(debounceInput);
  }, [debounceInput]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      props?.type === "number" &&
      props?.max &&
      parseInt(e?.target?.value) > props?.max
    ) {
      return e.preventDefault();
    }
    setEventObject(e);
    setInputValue(e?.target?.value);
  };

  const labelPostionClass = () => {
    props?.labelPosition === "left";
  };

  return (
    <>
      <label
        className={`label-${
          labelPositionClasses[props?.labelPosition || "left"]
        }`}
      >
        {props?.label}
      </label>
      <input
        type={props?.type}
        onChange={changeHandler}
        value={inputValue}
        min={props?.min}
        max={props?.max}
        placeholder={props?.placeholder}
        multiple={props?.multiple || false}
        {...props?.otherProps}
        style={props?.style}
      />
    </>
  );
};

export default Input;
