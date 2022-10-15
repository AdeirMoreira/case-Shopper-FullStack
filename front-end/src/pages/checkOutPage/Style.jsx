import styled from "styled-components";

export const CheckOutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6em 0em 0em 0em;
    align-items: center;
    gap: 2.5em;
    padding-bottom: 3em;
    @media screen and (max-width: 800px) {
        padding-top: 9em;
    }
`
export const NavigationbuttonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5em;
` 
export const NagationButton = styled.button`
    background-color: white;
    padding: 0.5em 3em 0.5em 3em;
    border-radius: 3em;
    font-size: 1em;
    color: rgb(68,68,109);
    :hover{
        background-color: rgb(68,68,109);
        color: white;
    }
`

