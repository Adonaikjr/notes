import styled from "styled-components";

export const ContainerSection = styled.section`
  height: 100%;
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
  > h3 {
    margin-left: 16px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding-bottom: 16px;
    margin-bottom: 28px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`;
