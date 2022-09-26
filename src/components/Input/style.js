import styled from "styled-components";

export const ContainerInput = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    border-radius: 10px;
    margin-bottom: 8px;

    >input{
        height: 56px;
        width:100%;
        color: ${({theme}) => theme.COLORS.WHITE};
        background-color:transparent;
        padding:12px;
        border:0;
        &:placeholder{
            background-color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }
    >svg{
        margin-left:16px;
        
    }
`