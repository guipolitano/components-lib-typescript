import * as React from 'react';

import { Card } from './styles';

type Props = {
  children: React.ReactNode,
  height: string,
  wrap?: "wrap" | "nowrap"
}
const CardElement: React.FC<Props> = props =>{
  return <Card {...props}>{props.children}</Card>;
}

export default CardElement;