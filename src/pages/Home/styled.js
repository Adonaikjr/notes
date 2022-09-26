import styled from "styled-components";

export const ContainerHome  = styled.div`
    width: 100%;
    height:100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};

`
export const Brand  = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    border-bottom-width:1px;
    border-bottom-style:solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    >h1{
        font-size:24px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`

export const Menu = styled.ul`
    grid-area:menu;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding-top: 64px;
    text-align: center; 
    width: 100%;
    >li{
        margin-bottom:24px;
    }
`
export const Search  = styled.div`
    grid-area: search;
    width: 100%;
    padding: 64px 64px 0px;

`
export const Content  = styled.div`
    width: 100%;
    grid-area: content;
    


`
export const NewNote = styled.button`
    grid-area: newnote;
    background: ${({theme}) => theme.COLORS.ORANGE};
    border: none;
    width: 100%;
    font-size: 24px;
    svg{
        margin-right: 8px;
        font-size: 24px;
    }
`