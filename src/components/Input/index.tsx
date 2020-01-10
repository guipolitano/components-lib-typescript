import * as React from "react";

import { Input } from "./styles";

interface Props{
  value: String,
  placeholder: String,
  onChange: any,
  onKeyDown: any
}
const InputComponent: React.FC<Props> = ({ value, placeholder, onChange, onKeyDown}) => {
  return (
    <Input
      onKeyDown={onKeyDown}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
export default InputComponent;
