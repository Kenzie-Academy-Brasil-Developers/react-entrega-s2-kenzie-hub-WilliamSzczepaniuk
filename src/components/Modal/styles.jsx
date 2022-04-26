import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;


    .container_modal{
        top: 25%;
        position: fixed;
        width: 296px;
        height: 274.74px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #343B41;
    }
    .container_register_tech{
        align-items: center;
        display: flex;
        height: 39.97px;
        width: 100%;
        justify-content: space-between;
    }
    .button_X{
        margin-right:10px;
        background-color: #343B41;
        border-style: none;
        font-weight: 600;
        font-size: 12.83px;
        color: #868E96;
    }
    form{
        align-items: center;
        width: 100%;
        background-color: #212529;
        justify-content:space-evenly ;
        flex-direction: column;
        display: flex;
        height: 100%;
    }
    select{
        color: #F8F9FA;
        width: 263.63px;
        height: 38.37px;
        border: 1px solid #F8F9FA;
        border-radius: 3.2px;
        background-color: #343B41;
    }
    p{
    
        align-self: flex-start;
        margin: 0px;
        font-size: 9.77px;
        margin-left: 16px;
    }
    h3{
        margin-left: 10px;
        font-size: 11.23px;
        font-weight: 700;
    }
`