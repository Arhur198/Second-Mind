import React from "react";
import { TextFieldStyled } from "ui/components/inputs/TextField/TextField.style";
import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@mui/material";

export interface TextFieldInputMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldInputMaskProps> = ({
  mask,
  ...props
}) => {
  return (
    <InputMask mask={mask}>
      {() => {
        return <TextFieldStyled {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
