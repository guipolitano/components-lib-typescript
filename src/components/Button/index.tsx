import React from 'react';

import { Button } from './styles';

export type Props = {
  text: string;
  color?: string;
  margin?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};
const ButtonComponent: React.FC<Props> = props => {
  return (
    <Button {...props}>
      {props.text}
    </Button>
  );
}
ButtonComponent.defaultProps = {
  color: "grey",
  margin: "0px",
  type: "button"
}
export default ButtonComponent;
