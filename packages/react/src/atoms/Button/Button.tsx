import React from "react";

interface ButtonProps {
  label?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return (
    <button className="shde-button-container">
      {label ? label : "Click Me"}
    </button>
  );
};

export default Button;
