import styled from 'styled-components'


export const Container = styled.div`
    height: 100%;
    color: white;

    .Container_Home{
        width: 296px;
        margin: 0 auto;
    }
    nav{
        display: flex;
        height: 60px;
        justify-content: space-between;
        align-items: center;

    }
    img{
        margin: 10px;
        margin-top: 20px;
    }
    .button_sair{
        border-radius: 4px;
        margin-top: 10px;
        border-style: none;
        width: 55.49px;
        height: 32px;
        background-color: #212529;
        color: #F8F9FA;
        font-weight: 600;
        font-size: 12px;
        margin-right: 10px;
    }
    section{
        height: 131px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h2{
        margin: 6px 10px;
        font-size: 18px;
    }
    p{
        margin: 6px 10px;
        font-size: 12px;
    }
    .container_Add_techs{
        background-color: #121214;
        margin: 0 auto;
        width: 296px;
        height: 53px;
        display: flex;
        justify-content: space-between;
    }
    .button_add{
        font-size: 14px;
        font-weight: 800;
        margin: 3px;
        color:#FFFFFF;
        border-style: none;
        width: 32.49px;
        height: 32px;
        background-color: #212529;
    }
    h3{
        margin: 3px;
        font-size: 16px;
        font-weight: 600;
    }
    .container_techs{
        display: flex;
        justify-content: center;
        height: 100vh;
        background-color: #212529;
    }
    @media(min-width:920px)
`