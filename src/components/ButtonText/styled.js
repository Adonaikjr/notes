import styled from "styled-components";

export const ContainerButtonText = styled.button`
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  cursor: pointer;
  border: none;
  font-size: 16px;
  transition: 1s;
  width: 100%;
  transition: 1s;
  :hover {
    transition: 0.5s;
    color: #000;
    font-size: 24px;
  }
`;
