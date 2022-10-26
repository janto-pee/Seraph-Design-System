import React from "react";

interface ButtonProps {
  label: String;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default Button;
