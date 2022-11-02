import React from "react";

interface ButtonProps {
  label?: string;
  type?: any;
  bg?: string;
  cl?: string;
  px?: string;
  py?: string;
  fs?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  type = "submit",
  bg = "primary",
  cl = "white",
  px = "md",
  py = "xs",
  fs,
}) => {
  let className = ``;

  if (px) {
    className = `${className} shde-px-${px}`;
  }
  if (bg) {
    className = `${className} shde-px-${bg}`;
  }
  if (cl) {
    className = `${className} shde-px-${cl}`;
  }
  if (py) {
    className = `${className} shde-px-${px}`;
  }
  if (fs) {
    className = `${className} shde-fs-${fs}`;
  }
  return (
    <button className={className} type={type}>
      {label ? label : "Click Me"}
    </button>
  );
};

export default Button;
