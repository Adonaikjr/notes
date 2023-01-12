import styled from "styled-components";

export const ContainerTags = styled.span`
border: solid${({theme}) => theme.COLORS.ORANGE};
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    font-size:16px;
    font-weight: 700;
    border-radius:5px;
    margin-left: 1rem;
    padding: 0rem 0.5rem 0rem 0.5rem;
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    background: ${({theme}) => theme.COLORS.ORANGE};
`