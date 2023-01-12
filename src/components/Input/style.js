import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.COLORS.GRAY_300};;
  width: 100%;
  margin-bottom: 1rem;
  > input {
    height: 4rem;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    padding: 12px;
    border: 0;
    &:placeholder {
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  > svg {
    margin-left: 16px;
  }
`;
