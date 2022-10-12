import styled from "styled-components";

export const PopUpContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PopUpMessage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-color: white;
    text-align: center;
    padding: 0.7em;
    width: 300px;
    border-radius: 0.5em;
    /* p{
        margin-top: 43px;
    }
    select{
        height: 56px;
    }
    button{
        margin-top: 28px;
        width: fit-content;
        align-self: flex-end;
    } */
`
export const CloseButton = styled.div`
    width: fit-content;
    align-self: flex-end;
    margin-right: 0.5em;
    border-radius: 0.2em;
    padding: 0.3em;
    color: rgb(51,51,51);
    font-weight: 500;
    font-size: 0.9em;
    :hover{
        background-color: rgb(221,221,221);
    }
`
export const StockLimitText = styled.p`
    margin: 0;
    font-size: 2em;
    color: RGB(110, 110, 110);
`
export const StockLimitDescription = styled.p`
    margin: 0;
    font-size: 1em;
    color: RGB(129, 129, 129);
`