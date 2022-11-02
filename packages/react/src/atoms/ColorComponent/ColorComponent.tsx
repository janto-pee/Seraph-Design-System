import React from "react";
import spaces from "../../foundation/spaces";
// import "@seraph-design-system/scss/lib/utilities/spacing.css";

interface ColorComponentProps {
  colorCode?: string;
  width?: string;
  height?: string;
}

const ColorComponents: React.FunctionComponent<ColorComponentProps> = ({
  colorCode = "blue",
  width = spaces.sm,
  height = spaces.lg,
}) => {
  const className = `shde-width-${width} shde-height-${height}`;
  return <div className={className} style={{ background: colorCode }}></div>;
};

export default ColorComponents;
