import React from "react";
import "./Badge.css";
import { createUseStyles } from "react-jss";

type BadgeProps = {
  label: string;
  bgColor?: string;
  size?: "large" | "medium" | "small";
  type?: "bordered" | "default";
  theme?: "primary" | "secondary" | "success" | "danger";
};

const Badge = (props: BadgeProps) => {
  const {
    label,
    bgColor = "red",
    size = "medium",
    type = "default",
    theme = "primary",
  } = props;
  return (
    <span className={`badge ${size} ${theme}`} data-badge-type={type}>
      {label}
    </span>
  );
};

export default Badge;
