import styled from "styled-components";
import background from "../../assets/background.png";
export const ContainerSignup = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Form = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 48px;
  }
  > h2 {
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 24px;
  }
  > p {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > a {
    padding-top: 2rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 20px;
  }
  label {
    @media (max-width: 363px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  button {
    border-radius: 2rem;
    border-left: solid 10px;
    border-right: solid 10px;
    width: 22rem;
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`;
