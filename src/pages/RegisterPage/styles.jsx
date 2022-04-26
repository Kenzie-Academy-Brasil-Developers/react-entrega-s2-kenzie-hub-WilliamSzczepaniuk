import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    
    nav{
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        margin-top: 49px;
    }
    .button-voltar{

        font-weight: 600;
        border-style: none;
        background-color: #212529;
        color: #F8F9FA;
        width: 79.54px;
        height: 25.58px;
        font-size: 9.59px;
        border-radius: 4px;
        
    }
    a{  
        font-family: 'Inter';
        padding: 7.5px 21px;
        text-decoration: none;
        color: #F8F9FA;
    }
    @media (min-width: 920px){
        img{
        width: 122px;
        height: 16.92px;
        }
        .button-voltar{
            height: 32px;
            width: 67.49px;
        }
        a{
            padding: 5px 15px;
        }
    }
`