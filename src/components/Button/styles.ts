import styled from 'styled-components';
export type Props = {
  text: string;
  color?: string;
  margin?: string;
  type?: string;
};
export const Button = styled.button<Props>`
    height: 35px;
    width: 10%;
    background: ${({color}) => color};
    background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3));
    margin: ${({margin}) => margin};
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    display: flex;
    justify-content: center;
    flex: 1;
`;
