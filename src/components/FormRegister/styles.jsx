import styled from 'styled-components'

export const FormRegisterStyled = styled.form`

    background-color: #212529;
    width: 296px;
    height: 619px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 38px;
    h2{
        margin-top: 10px;
        font-size: 14.39px;
        color: #F8F9FA;
    }
    p{
        font-size: 9.59px;
        color:#868E96
    }
    button{
        margin-bottom: 10px;
    }
    input{
        border-style: none;
    }
    select{
        border-style: none;
    }
    @media (min-width:920px){
        width: 370px;
        height: 711px;
    }
    h2{
        font-size: 18px;
    }
    p{
        font-size: 12px;
    }
    img{
        width: 122px;
    }

`
