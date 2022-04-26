import styled from 'styled-components'

export const Container = styled.div`



    label{
        font-size: 9.77px;
        display: block;
        text-align: left;
        margin-bottom: 10px;
        color: #F8F9FA;
        font-weight: 400;
    }
    input{

        background-color: #343B41;
        border: 0.98px solid #F8F9FA;
        border-radius: 3.21px;
        height: 34.5px;
        width: 256.66px;
    }
    div{
        display: flex;
    }
    span{
        color: red;
        margin-left: 10px;
        font-size: 11px;
    }
    @media (min-width:920px){
        input{
            height: 48px;
            width: 329.93px;
        }
        label{
            font-size: 12.18px;
        }
    }

    
`
