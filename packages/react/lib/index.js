import React from 'react';

const Button = ({ label }) => {
    return (React.createElement("button", { className: "shde-button-container" }, label ? label : "Click Me"));
};

const Color = ({ colorCode = "blue", width = "1rem", height = "1rem", }) => {
    return (React.createElement("div", { style: { background: colorCode, width: width, height: height } }));
};

const spaces = {
    none: "none",
    xxxs: "xxxs",
    // 4px
    xxs: "xxs",
    // 8px
    xs: "xs",
    // 12px
    sm: "sm",
    // 16px
    md: "md",
    // 24px
    lg: "lg",
    // 32px
    xl: "xl",
    // 48px
    xxl: "xxl",
    // 72px
    xxxl: "xxxl",
    // 96px
};
var spaces$1 = Object.freeze(spaces);

const ColorComponents = ({ colorCode = "blue", width = spaces$1.sm, height = spaces$1.lg, }) => {
    const className = `shde-width-${width} shde-height-${height}`;
    return React.createElement("div", { className: className, style: { background: colorCode } });
};

const Margin = () => {
    return React.createElement("div", null);
};

export { Button, Color, ColorComponents as ColorComponent, Margin, spaces$1 as spaces };
//# sourceMappingURL=index.js.map
