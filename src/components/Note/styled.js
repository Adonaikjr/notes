import styled from "styled-components";

export const ContainerNotes = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transition: 1s;
    height: 8.5rem;
    width: 62rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    @media (max-width: 1400px) {
      :hover {
        width: 59rem;
      }
    }
    @media (max-width: 1350px) {
      :hover {
        width: 57rem;
      }
      @media (max-width: 1290px) {
      :hover {
        width: 50rem;
      }
    }
    @media (max-width: 1196px) {
      :hover {
        width: 45rem;
      }
    }
    @media (max-width: 1097px) {
      :hover {
        width: 40rem;
      }
    }
    @media (max-width: 1000px) {
      :hover {
        width: 35rem;
      }
    }
  
  
  
    }
  
  
  }
  > h2 {
    padding-top: 1rem;
    padding-bottom: 2rem;
    width: 100%;
    padding-left: 1rem;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > footer {
    width: 100%;
  }
`;
