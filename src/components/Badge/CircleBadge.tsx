import React from "react";
import { CircleBadgeProps } from "./BadgeModel";
import "./CircleBadge.scss";

const CircleBadge = (props: CircleBadgeProps<string>) => {
  const { labels, size = "medium" } = props;

  const colorCombination = [];
  const mLabel = labels?.map((label) => (
    <div className={`badge-circle-container ${size}`} title={label} key={label}>
      {label?.split(" ")?.map((l) => l[0]?.toUpperCase())}
    </div>
  ));

  return <div>{mLabel}</div>;
};

export default CircleBadge;
