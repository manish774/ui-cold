import React from "react";
import "./Toggle.css";
const Toggle = ({ style, label, onChangeTheme }: any) => {
  return (
    <div style={style}>
      <label className="label">
        <div className="toggle">
          <input
            className="toggle-state"
            type="checkbox"
            name="check"
            value="check"
            onChange={() => onChangeTheme()}
          />
          <div className="indicator"></div>
        </div>
        <div className="label-text">{label}</div>
      </label>
    </div>
  );
};

export default Toggle;
