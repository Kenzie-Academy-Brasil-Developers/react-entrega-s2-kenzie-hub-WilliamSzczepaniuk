import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    select{
        height: 38.38px;
        border-radius: 3.2px;
        width: 263.79px;
        color: #868E96;
        background-color: #343B41;
    }
    label{
        margin-bottom: 10px;
        font-size: 9.74px;
        color:#F8F9FA;
    }
    @media (min-width:920px){
        display: flex;
        flex-direction: column;
        width: 329.36px;
        select{
        
            width: 100%;
            height: 48px;
        }
        label{
            font-size: 12.18px;
        }    
    }
`
