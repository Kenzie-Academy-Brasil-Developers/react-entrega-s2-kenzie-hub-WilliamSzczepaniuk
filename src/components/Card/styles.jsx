import styled from "styled-components";

export const Container = styled.li`
    width: 279px;
    height: 48.73px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #121214;
    margin: 6px;
    border-radius: 4px;
    h2{
        font-size: 14.21px;
        font-weight: 700;
        color: #F8F9FA;
        margin: 0px;
        margin-left: 10px;
    }
    p{
        font-size: 12.18px;
        color: #868E96;
        margin: 0px;
        margin-right: 10px;
    }
    @media (min-width: 920px){
        width: 742px;
        :hover{
            background-color: #868E96;
        }
        p{
            margin-right: 10px;
        }
    }
    
`