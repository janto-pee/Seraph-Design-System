import React from "react";

interface ButtonProps {
  label?: string;
  theme?: string;
}
const Button: React.FunctionComponent<ButtonProps> = ({ label, theme }) => {
  const className = `shde-${theme}`;
  return <button className={className}>{label ? label : "Enter label"}</button>;
};
export default Button;
