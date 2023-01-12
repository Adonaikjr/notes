import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.43rem;
`;
export const ContentHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`


export const ContainerProfile = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 3.12rem;
  padding-top: 20px;
  > img {
    border: solid 1px ${({ theme }) => theme.COLORS.ORANGE};
    width: 3.5rem;
    height:3.5rem;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    strong {
      font-size: 18px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const ContainerLogout = styled.button`
  border: none;
  background: none;
padding-top: 20px;
padding-right:2rem ;
  height: 100%;
  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 24px;
  }
`;
