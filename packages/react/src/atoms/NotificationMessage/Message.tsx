import React from "react";
interface MessageProps {
  icon?: string;
  message?: string;
  px?: string;
  py?: string;
  text?: string;
  fw?: string;
  bg?: string;
  iconStyle?: string;
}

const Message: React.FunctionComponent<MessageProps> = ({
  icon,
  message,
  text,
  px,
  py,
  fw,
  bg = "primary",
  iconStyle = "danger",
}) => {
  let containerClass = "flex items-center gap-2";
  let iconClass = "";
  let textClass = ``;

  if (py || px || bg) {
    containerClass = `${containerClass} ${py} ${px} bg-${bg}`;
  }
  if (iconStyle) {
    iconClass = `icon-${iconStyle}`;
  }
  if (text) {
    textClass = `${textClass} text-${text}`;
  }
  if (fw) {
    textClass = `${textClass} font-${fw}`;
  }
  return (
    <div className={containerClass}>
      <span className={iconClass}>{icon}</span>
      <span className={textClass}>{message}</span>
    </div>
  );
};

export default Message;
