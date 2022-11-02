import React from "react";

interface TextProps {
  text?: string;
  fs?: string;
  fw?: number;
  cl?: string;
  sup?: string;
  cite?: string;
  em?: string;
  sub?: string;
}

const Text: React.FunctionComponent<TextProps> = ({
  text = "enter text",
  fs = "sm",
  fw = 100,
  cl = "dark",
  sup,
  cite,
  em,
  sub,
}) => {
  let className = ``;

  if (fs) {
    className = `${className} fs-${fs}`;
  }
  if (fw) {
    className = `${className} fs-${fw}`;
  }
  if (cl) {
    className = `${className} fs-${cl}`;
  }
  if (sup) {
    className = `${className} fs-${sup}`;
  }
  if (cite) {
    className = `${className} fs-${cite}`;
  }
  if (em) {
    className = `${className} fs-${em}`;
  }
  if (sub) {
    className = `${className} fs-${sub}`;
  }

  return <div className={className}>{text}</div>;
};

export default Text;
