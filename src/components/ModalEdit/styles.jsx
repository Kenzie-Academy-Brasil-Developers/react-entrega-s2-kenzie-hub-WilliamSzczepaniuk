import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7) ;
    height: 100%;


`
export const ContainerDiv = styled.div`
    position: fixed;
    top: 25%;
    width: 296px;
    background-color: #212529;
    height: 274.34px;
    .Container_details{
        background-color: #343B41;
        display: flex;
        height: 40.11px;
        justify-content: space-between;
        align-items: center;

    }
    h3{
        color: #F8F9FA;
        margin-left: 10px;
        font-weight: 700;
        font-size: 11.23px;
    }
    .Container_details .button_X{
        height: 20.86px;
        color: #868E96;
        background-color: #343B41;
        border-style: none;
        margin-right: 10px;
    }
    form{
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    h4{
        font-size: 9.74px;
        margin-left: 15px;
        align-self:flex-start ;
    }
    select{
        color: #FFFFFF;
        width: 263.63px;
        height: 38.37px;
        border-style:none;
        border-radius: 3.2px;
        background-color: #343B41;
    }
    .button_save{
        font-weight: 500;
        border-radius: 4px;
        border-style: none;
        width: 163.09px;
        height: 38.37px;
        background-color: #59323F;
        font-size: 12.79px;
        color: #FFFFFF;
    }
    button + button {
        font-weight: 500;
        border-radius: 4px;
        color: #FFFFFF;
        border-style: none;
        font-size: 12.79px;
        width: 78.35px;
        background-color: #868E96;
    }
    .container_buttons{
        margin: 0 auto;
        width: 263.63px;
        justify-content: space-between;
        display: flex;
    }
`