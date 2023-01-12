import styled from "styled-components";

export const ContainerTextArea = styled.textarea`
    width: 90%;
    height:150px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-left: 5%;
    margin-right: 5%;
    border: solid 1px ${({theme}) => theme.COLORS.GRAY_300};
    resize:none; //aumentar e diminuir textarea desabiltado
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
    border-radius:10px;
    padding:16px;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
        font-size: 1.3rem;
        
    }
`