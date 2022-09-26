import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0 auto;
        padding: 0 auto;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
        
    }
    border-style, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }
    a{
        text-decoration: none;
    }


`