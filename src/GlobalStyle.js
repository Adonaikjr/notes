import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    
    }

    body{
        margin: 0 auto;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
        font-family:'Roboto Slab', serif;
        max-width: 1440px;
        min-width: 480px;
        min-height: 100vh;
        :focus{
            outline: auto;
        }
        
    }
    button{
        cursor: pointer;
    }
    border-style, input, button, textarea{
        font-size: 16px;
        outline: none;
        font-family:'Roboto Slab', serif;
    }
    a{
        text-decoration: none;
    }


`;
