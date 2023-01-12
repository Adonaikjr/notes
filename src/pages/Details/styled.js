import styled from "styled-components";
import { NewContainerSection } from "../New/styled";

export const ContainerSignin = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 64px 0;
  }
`;

export const ContentSection = styled(NewContainerSection)`
  height: 10rem;
  margin:0px;
  overflow: hidden;
  

`;

export const ContainerLinks = styled.ul`
  list-style: none;
  padding-left: 1rem;
  > li {
    font-size: 18px;
    margin-top: 12px;
    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }
  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin: 16px 16px 16px 16px;
    text-align: justify;
  }
`;
