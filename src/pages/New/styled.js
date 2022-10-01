import styled from "styled-components";

export const ContainerNew = styled.div`
    width:100;
    height:100vh;
    display:grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header" 
    "content";
    >main{
        width:80%;
        grid-area: 'content';
        overflow-y: scroll;
        margin-bottom: 32px;
    }
    .tags{
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }
`

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto;

`

export const Article = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;
    margin-top: 36px;

    a{
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
`