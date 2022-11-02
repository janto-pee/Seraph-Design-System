import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Color,
  spaces,
  ColorComponent,
} from "@seraph-design-system/react";

import "@seraph-design-system/scss/lib/atoms/Button.css";
import "@seraph-design-system/scss/lib/utilities/spacing.css";

ReactDOM.render(
  <div>
    <Button />
    <Color colorCode="purple" width="1rem" height="1rem" />
    <ColorComponent colorCode="coral" width={spaces.xxl} height={spaces.xxl} />
    {/* <NewButton type='submit' bg='primary' cl='white' px=8 py=2 fs=md /> */}
  </div>,
  document.querySelector("#root")
);
