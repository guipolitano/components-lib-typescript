import React from 'react';

import { Container, GridItem } from './styles';
export type Props = {
    children: React.ReactNode;
    xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
const Col: React.FC<Props> = props => {
    return (
        <Container {...props}>
            {React.Children.map(props.children, child => (
                <GridItem>
                    {child}
                </GridItem>
            ))}
        </Container>
    );
}

export default Col;