import React from "react";

interface ColorProps {
  colorCode?: string;
  width?: string;
  height?: string;
}

const Color: React.FunctionComponent<ColorProps> = ({
  colorCode = "blue",
  width = "1rem",
  height = "1rem",
}) => {
  return (
    <div style={{ background: colorCode, width: width, height: height }}></div>
  );
};

export default Color;
