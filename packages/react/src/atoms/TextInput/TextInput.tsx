import React from "react";

interface TextInputProps {
  placeholder: string;
  textClass: string;
  w?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  pb?: string;
  px?: string;
  py?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
  mx?: string;
  my?: string;
  type?: string;
  name?: string;
  b?: string;
  br?: string;
  bc?: string;
}

const TextInput: React.FunctionComponent<TextInputProps> = ({
  name,
  type = "text",
  w = "100%",
  placeholder = "Enter text",
  textClass,
  pl,
  pr,
  pt,
  pb,
  px,
  py,
  ml,
  mr,
  mt,
  mb,
  mx,
  my,
  b,
  bc,
  br,
}) => {
  let className = ``;
  if (w) {
    className = `w-${w}`;
  }
  if (px || py || pl || pr || pt || pb) {
    className = `${className} shde-px-${px} shde-px-${py} shde-px-${pl} shde-px-${pr} shde-px-${pt} shde-px-${pb}`;
  }
  if (mx || my || ml || mr || mt || mb) {
    className = `${className} shde-mx-${mx} shde-mx-${my} shde-mx-${ml} shde-mx-${mr} shde-mx-${mt} shde-mx-${mb}`;
  }
  if (textClass) {
    className = `${className} shde-${textClass} `;
  }
  if (b) {
    className = `${className} shde-${b} shde-${br} shde-${bc}`;
  }

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default TextInput;
