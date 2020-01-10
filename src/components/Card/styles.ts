import styled from "styled-components";
type Props = {
  height: string,
  wrap?: "wrap" | "nowrap"
}
export const Card = styled.div<Props>`
  overflow-y: auto;
  display: flex;
  padding: 10px 10px;
  flex-wrap: ${({wrap})=>wrap};
  flex-direction: column;
  background: #b1b1b1;
  border-radius: 5px;
  margin: 2px;
  transition: all 0.5s ease-in-out;
  width: 100%;
  box-shadow: 0px 1px 6px 2px #b5b5b5;
  height: ${({height})=> height ? height : "100px"};
`;

Card.defaultProps = {
  wrap: "nowrap"
}
