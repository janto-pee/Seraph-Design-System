import React from "react";

interface BadgeProps {
  icon: string;
  bStyle?: string;
  bPosition?: string;
  bshape?: string;
  bSize?: string;
  bText?: string;
}

const Badge: React.FunctionComponent<BadgeProps> = ({
  icon,
  bStyle,
  bshape,
  bPosition,
  bSize,
  bText,
}) => {
  let className = ``;
  if (bStyle) {
    className = `${className} shde-${bStyle} shde-${bshape} shde-${bPosition} shde-${bSize} `;
  }
  return (
    <div className="badge-block">
      <div>{icon}</div>
      <span className={className}>{bText}</span>
    </div>
  );
};

export default Badge;
