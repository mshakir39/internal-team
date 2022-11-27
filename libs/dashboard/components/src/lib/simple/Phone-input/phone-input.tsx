import MuiPhoneNumber from "material-ui-phone-number-2";
import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

/* eslint-disable-next-line */

export interface PhoneNumberInputProps {
  label?: string;
  required?: boolean;
  autoFormat?: boolean;
  name: string;
  style?: object;
  size?: "small" | "medium";
  dataTestId?: string;
  onChange?: any;
  defaultCountry?: string;
  fullWidth?: boolean;
  value?: string;
  variant?: "filled" | "outlined" | "standard";
  margin?: "dense" | "normal" | "none";
}

export const PhoneInput: React.FC<PhoneNumberInputProps> = (props) => {

  const {
    label,
    dataTestId,
    autoFormat=true,
    name,
    style,
    size="small",
    value,
    defaultCountry="us",
    variant = "standard",
    required,
    fullWidth=true,
    margin="dense",
    onChange,
    ...rest
  } = props;

  return (
    <MuiPhoneNumber
      value={value}
      variant={variant}
      required={required}
      data-testid={dataTestId}
      autoFormat={autoFormat}
      name={name}
      fullWidth={fullWidth}
      style={style}
      defaultCountry={defaultCountry}
      label={label}
      onChange={onChange}
      margin={margin}
      size={size}
      {...rest}
    />
  );
};

export default PhoneInput;
