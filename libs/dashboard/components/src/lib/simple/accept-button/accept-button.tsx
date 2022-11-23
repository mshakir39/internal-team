import * as React from "react";
import Button from "@mui/material/Button";
import { OverridableStringUnion } from "@mui/types";

interface ButtonProps {
  text?: string;
  type?: "submit" | "reset" | "button";
  fullWidth?:boolean;
  name?: string;

  style?:object;
  color_?: OverridableStringUnion<
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
  >;
  onClick?: () => void;
}

function AcceptButton({
  type = "submit",
  text = "Default",
  color_ = "primary",
  fullWidth=true,
  style,
  onClick,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      data-testid="accept-btn"
      fullWidth={fullWidth}
      color={color_}
      style={style}
      variant={"contained"}
    >
      {text}
    </Button>
  );
}

export default AcceptButton;
