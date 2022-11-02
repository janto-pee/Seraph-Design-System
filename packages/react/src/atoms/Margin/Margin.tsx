import React from "react";

interface MarginProp {
  spacing?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const Margin: React.FunctionComponent<MarginProp> = ({
  top,
  bottom,
  left,
  right,
  spacing,
}) => {
  let className = ``;
  if (!top && !bottom && !left && !right) {
    className = `dse-margin-${spacing}`;
  }

  return <div className=""></div>;
};

export default Margin;
