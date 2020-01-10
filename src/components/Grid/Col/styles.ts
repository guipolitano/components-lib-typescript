import styled from 'styled-components';

export type Props = {
  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const Container = styled.div<Props>`
  flex: 1;
  @media screen and (min-width: 480px) {
      flex-basis: ${({ sm }) => sm ? (sm/12)*100 : 1}%;
      width: ${({ sm }) => sm ? (sm/12)*100 : 1}%;
  }

  @media screen and (min-width: 768px) {
      flex-basis: ${({ md }) => md ? (md/12)*100 : 1}%;
      width: ${({ md }) => md ? (md/12)*100 : 1}%;
  }
  
  @media screen and (min-width: 1024px) {
      flex-basis: ${({ lg }) => lg ? (lg/12)*100 : 1}%;
      width: ${({ lg }) => lg ? (lg/12)*100 : 1}%;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex: 0 0 auto;
`;

