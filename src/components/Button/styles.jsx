import styled from 'styled-components'

export const ButtonStyled = styled.button`
    background-color: ${props => props.background};
    width: 259.9px;
    height: 38.5px ;
    border-style: none;
    color:#F8F9FA;
    font-size: 12.83px;
    font-weight: 500;
    font-family: 'Inter';
    border-radius: 4px;
    @media (min-width:920px){
        width: 324px;
        height: 48px;
        font-size: 16px;
        margin-bottom: 10px;
    }
`
