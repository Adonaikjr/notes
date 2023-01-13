import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const ContentHome = styled.main`
  display: flex;
  justify-content: space-between;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  text-align: center;
  width: 25rem;
`;
export const Brand = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    margin-top: 0.5rem;
    transition: 0.5s;
    padding-bottom: 1rem;
    :hover {
      cursor: pointer;
      transition: 0.5s;
      font-size: 26px;
    }
  }
  ul {
    height: 30rem;
    overflow: auto;
    list-style: none;
    direction: rtl;
    text-align: left;
    padding-right: 5px;
    border: solid 1px ${({ theme }) => theme.COLORS.BACKGROUND_900};
    ::-webkit-scrollbar {
      width: 6px;
      transition: 1s;
      // background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${({ theme }) => theme.COLORS.BACKGROUND_700};
      transition: 1s;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      transition: 1s;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      transition: 1s;
    }
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }
  li {
    font-size: 16px;
    font-weight: 400;
    list-style: none;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    height: 4rem;
    :hover {
      transition: 0.1s;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      background-color: ${({ theme }) => theme.COLORS.ORANGE};
      color: #000;
    }
  }
  > h1 {
    padding-top: 2.2rem;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    > img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-top: 1rem;
    }
  }
`;
export const Search = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4rem;
  padding: 1rem;
  input {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 2rem;
  height: 65vh;
  overflow: auto;
  transition: 1s;
  ::-webkit-scrollbar {
    width: 10px;
    transition: 1s;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 10px;
    transition: 1s;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 10px;
    transition: 1s;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    transition: 1s;
  }
`;
export const ContainerArticle = styled.article`
  padding-left: 4rem;
  width: 100%;
  transition: 1s;
  @media (max-width: 538px) {
    transition: 1s;
    padding-left: 1rem;
  }
`;
export const NewNote = styled(Link)`
  background: ${({ theme }) => theme.COLORS.ORANGE};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  text-align: center;
  font-size: 24px;

  svg {
    margin-right: 8px;
    font-size: 24px;
  }
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  text-decoration: none;
  transition: 0.2s;
  :hover {
    height: 6rem;
    transition: 0.1s;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
`;
