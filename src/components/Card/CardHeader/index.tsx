import React from 'react';

import { CardHeader } from './styles';
type Props = {
  children: React.ReactNode;
}
const CardHeaderComponent: React.FC<Props> = ({children}) => {
  return (
    <CardHeader>{children}</CardHeader>
  );
}

export default CardHeaderComponent;
