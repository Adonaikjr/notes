import styled from "styled-components";
import { ContainerSection } from "../../components/Section/styled";

export const ContainerNew = styled.div`
  width: 100;
  height: 100vh;
  > main {
    margin-bottom: 32px;
  }
  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const NewContainerSection = styled(ContainerSection)`
  height: 10rem;
  overflow: auto;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2rem;
  
`;

export const Form = styled.form`
  width: 100%;
`;
export const Label = styled.label`
  > div {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
  input {
    width: 100%;
  }
`;
export const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 2rem;
  margin-bottom: 2.5rem;

  a {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
