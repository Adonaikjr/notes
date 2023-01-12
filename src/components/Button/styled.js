import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 4rem;
  border: 0;
  padding: 0;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  border: solid;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
