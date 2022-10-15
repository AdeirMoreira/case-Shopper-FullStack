import styled from "styled-components"

export const UserDataInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    
`
export const UserNameInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
`
export const UserNameInput = styled.input`
    width: 20em;
    border: 0.1em solid RGB(45, 167, 122);
    border-radius: 1em;
    padding: 0.2em 0.5em 0.2em 0.5em;
    font-size: 1em;
    :focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`
export const UserNameLabel = styled.label`
    font-size: 1.5em;
    color: RGB(45, 167, 122);
`
export const DeliveryDatainputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
`
export const DeliveryDataInput = styled.input`
    border: 0.1em solid RGB(45, 167, 122);
    border-radius: 1em;
    padding: 0.3em;
    :focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`
export const DeliveryDataLabel = styled.label`
    font-size: 1.5em;
    color: RGB(45, 167, 122);
`